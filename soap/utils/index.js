//De nuevo, suelo poner información sensible como el secret del JWT
//en un .env, pero por simplicidad para los que la probarán lo dejaré así

const generateJWTToken = async (data, options = {}) => {
	const jwt = require("jsonwebtoken");
	const token = jwt.sign(data, "secreto-jwt", options);
	return token;
};

const validateToken = token => {
	const jwt = require("jsonwebtoken");
	return jwt.verify(token, "secreto-jwt");
};

const mail = async (id, email, token) => {
	const transporter = require("../../config/transporter");
	const mailOptions = {
		from: "Gabriel <gabrieljim@airmail.cc>",
		to: email,
		subject: "Reinicio de contraseña",
		html: `<a href="${process.env.CLIENT_URL}${id}/${encodeURIComponent(
			token
		)}">Resetear contraseña</a>`
	};
	const mailSent = transporter.sendMail(mailOptions);
	return mailSent;
};

module.exports = {
	generateJWTToken,
	validateToken,
	mail
}
