const validateToken = token => {
	const jwt = require("jsonwebtoken");
	return jwt.verify(token, "secreto-jwt");
};

const allowIfLoggedIn = async (req, res, next) => {
	const Cookies = require("universal-cookie");
	const cookies = new Cookies(req.headers.cookie);

	const token = cookies.get("token");

	if (!token) {
		return res.status(401).json({ logout: "Sesión no iniciada" });
	}

	try {
		validateToken(token);
		next();
	} catch (e) {
		if (e.name === "TokenExpiredError") {
			res.status(400).json({ logout: "Sesión expirada" });
		} else if (e.name === "JsonWebTokenError") {
			res.status(400).json({ logout: "Token inválido" });
		} else {
			res.status(500).json({ logout: "Error del servidor" });
		}
	}
};

module.exports = allowIfLoggedIn;
