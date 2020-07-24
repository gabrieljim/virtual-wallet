const User = require("../models/User");
const utils = require("../utils");

const serverError = {
	data: JSON.stringify({
		flag: 0,
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
					flag: 0,
					error: "Usuario existente"
				})
			};
		}

		await User.create(data);

		return {
			data: JSON.stringify({
				flag: 1
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
					flag: 0,
					error: "Correo no existente"
				})
			};
		}

		const payload = {
			id: user._id,
			document: user.document,
			email: user.email
		};

		const token = await utils.generateJWTToken(payload, { expiresIn: "1h" });

		return {
			data: JSON.stringify({
				flag: 1,
				user: payload,
				token
			})
		};
	} catch (e) {
		console.log(e);
		return serverError;
	}
};

module.exports = {
	registerUser,
	login
};
