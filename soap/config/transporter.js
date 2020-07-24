const nodemailer = require("nodemailer")

//De nuevo, suelo poner información sensible como esta en un .env, pero por simplicidad para los que la probarán
//lo dejaré así

const transporter = nodemailer.createTransport({
	host: "mail.cock.li",
	port: 587,
	auth: {
		user: "gabrieljim@firemail.cc",
		pass: "123123123"
	}
})

module.exports = transporter;
