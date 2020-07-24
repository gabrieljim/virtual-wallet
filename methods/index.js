const callMethod = require("../soapClient");

const getStatus = async (req, res) => {
	const response = await callMethod("GetStatus", req.body.user);
	if (response.error) {
		res.json({ error: response.error });
	} else {
		res.json({ status: response.status });
	}
};

const addFunds = async (req, res) => {
	const response = await callMethod("AddFunds", req.body.user);
	if (response.error) {
		res.json({ error: response.error });
	} else {
		res.json({ msg: "¡Fondos cargados!" });
	}
};

const pay = async (req, res) => {
	const Cookies = require("universal-cookie");
	const cookies = new Cookies(req.headers.cookie);

	const token = cookies.get("token");

	const response = await callMethod("Pay", { token, ...req.body.user });
	if (response.error) {
		res.json({ error: response.error });
	} else {
		res.json({ msg: "success" });
	}
};

const confirmPay = async (req, res) => {
	const response = await callMethod("ConfirmPay", req.body.user);		
	console.log(response)
	if (response.error) {
		res.json({ error: response.error });
	} else {
		res.json({ msg: "success" });
	}
}

const registerUser = async (req, res) => {
	const response = await callMethod("RegisterUser", req.body);
	if (response.error) {
		res.json({ error: response.error });
	} else {
		res.json({ user: response.user, token: response.token });
	}
};

const login = async (req, res) => {
	const response = await callMethod("Login", req.body);
	if (response.error) {
		res.json({ error: response.error });
	} else {
		res.json({ user: response.user, token: response.token });
	}
};

module.exports = {
	getStatus,
	addFunds,
	pay,
	confirmPay,
	registerUser,
	login
}
