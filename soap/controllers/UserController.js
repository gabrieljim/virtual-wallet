const User = require("../models/User");
const utils = require("../utils");

const serverError = {
	data: JSON.stringify({
		code: 0,
		error: "Error del servidor"
	})
};

const registerUser = async args => {
	try {
		const { data: stringData } = args;
		const data = JSON.parse(stringData);

		const user = await User.findOne({
			$or: [{ email: data.email }, { document: data.document }]
		});

		if (user) {
			return {
				data: JSON.stringify({
					code: 2,
					error: "Usuario existente"
				})
			};
		}

		const newUser = await User.create(data);

		const payload = {
			id: newUser._id,
			document: newUser.document,
			email: newUser.email,
			phone: newUser.phone
		};

		const token = await utils.generateJWTToken(payload, { expiresIn: "1h" });

		return {
			data: JSON.stringify({
				code: 1,
				user: payload,
				token
			})
		};
	} catch {
		return serverError;
	}
};

const login = async args => {
	try {
		const { data: stringData } = args;
		const data = JSON.parse(stringData);

		const user = await User.findOne({
			email: data.email
		});

		if (!user) {
			return {
				data: JSON.stringify({
					code: 0,
					error: "Correo no existente"
				})
			};
		}

		const payload = {
			id: user._id,
			document: user.document,
			email: user.email,
			phone: user.phone
		};

		const token = await utils.generateJWTToken(payload, { expiresIn: "1h" });

		return {
			data: JSON.stringify({
				code: 1,
				user: payload,
				token
			})
		};
	} catch (e) {
		console.log(e);
		return serverError;
	}
};

const getStatus = async args => {
	const { data: stringData } = args;
	const data = JSON.parse(stringData);

	//Comparamos el documento y el telefono con los de la base de datos
	const user = await User.findOne({
		$and: [{ document: data.document }, { phone: data.phone }]
	});

	if (!user) {
		return {
			data: JSON.stringify({
				code: 0,
				error: "Usuario no existente"
			})
		};
	}

	return {
		data: JSON.stringify({ status: user.wallet })
	};
};

const addFunds = async args => {
	const { data: stringData } = args;
	const data = JSON.parse(stringData);

	//Comparamos el documento y el telefono con los de la base de datos
	const user = await User.findOne({
		$and: [{ document: data.document }, { phone: data.phone }]
	});

	if (!user) {
		return {
			data: JSON.stringify({
				code: 0,
				error: "Usuario no existente"
			})
		};
	}

	user.wallet = user.wallet + parseInt(data.value);
	await user.save();

	return {
		data: JSON.stringify({ code: 1 })
	};
};

const pay = async args => {
	const randtoken = require("rand-token");
	const { data: stringData } = args;
	const data = JSON.parse(stringData);

	const user = await User.findOne({ email: data.email });

	if (!user) {
		return {
			data: JSON.stringify({
				code: 0,
				error: "Usuario no existente"
			})
		};
	}

	if (user.wallet < data.value) {
		return {
			data: JSON.stringify({
				code: 5,
				error: "Fondos insuficientes"
			})
		};
	}

	const randomToken = randtoken.generate(6);

	user.tempToken = randomToken;
	await user.save();
	try {
		console.log(await utils.mail(data.email, randomToken));

		return {
			data: JSON.stringify({ code: 1 })
		};
	} catch(e) {
		console.log(e);
		return {
			data: JSON.stringify({ code: 5, error: "Mail quota reached" })
		};
	}
};

const confirmPay = async args => {
	const { data: stringData } = args;
	const data = JSON.parse(stringData);

	const user = await User.findOne({ tempToken: data.token });

	if (!user) {
		return {
			data: JSON.stringify({
				code: 4,
				error: "Token inválido o inexistente"
			})
		};
	}

	user.tempToken = undefined;
	user.wallet = user.wallet - parseInt(data.value);
	await user.save();

	return {
		data: JSON.stringify({ code: 1 })
	};
};

module.exports = {
	registerUser,
	login,
	getStatus,
	addFunds,
	pay,
	confirmPay
};
