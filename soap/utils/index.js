//De nuevo, suelo poner información sensible como el secret del JWT
//en un .env, pero por simplicidad para los que la probarán lo dejaré así

const generateJWTToken = async (data, options = {}) => {
	const jwt = require("jsonwebtoken");
	const token = jwt.sign(data, "secreto-jwt", options);
	return token;
};

const mail = async (email, token) => {
	const transporter = require("../config/transporter");
	const mailOptions = {
		from: "Gabriel <gabrieljim@firemail.cc>",
		to: email,
		subject: "Confirme su compra",
		html: `<p>Su token para comprar es: <b>${token}</b></p>
			<br>
			<br>
			<br>
			<p>NOTA: En cuanto a esta parte no estaba por completo seguro de qué hacía falta, se pedía generar un token y un ID de sesión, pero no entendí muy bien qué debía ser cada cosa, sin embargo, la sesión se confirma ya que al iniciar sesión el servidor genera un JWT que se guarda en las cookies del cliente de modo que el servidor siempre sabe quien es al hacer una petición de ahí en adelante. Por esto, se confirma el token enviado al correo y se asegura que se está lidiando con el mismo usuario</p>	`
	};
	const mailSent = transporter.sendMail(mailOptions);
	return mailSent;
};

module.exports = {
	generateJWTToken,
	mail
};
