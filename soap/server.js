const soap = require("soap");
const http = require("http");
const mongoose = require("mongoose");
const fs = require("fs");

const UserController = require("./controllers/UserController");

/*
  Normalmente, usaría un .env con la librería dotenv para este tipo de información, sin embargo, para mantenerlo
  fácil de testear por los que lo van a usar dejé las strings planas, de este modo no hará falta enviarles
  información extra para que corran el proyecto
*/

mongoose
	.connect(
		"mongodb://localhost:27017/gabrielvirtualwallet",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		},
		err => {
			if (err) {
				throw new Error(
					"Error conectando a la base de datos, MongoDB está corriendo?"
				);
			}
			console.log("Conexión a Mongo exitosa");
		}
	)
	.catch(e => console.error(e));

// the service
var serviceObject = {
	WalletService: {
		WalletServicePort: {
			RegisterUser: UserController.registerUser,
			Login: UserController.login
		}
	}
};

// load the WSDL file
var wdsl = fs.readFileSync("service.wsdl", "utf8");

const port = 8001;
const server = http.createServer();
server.listen(port, () =>
	console.log(
		`Servicio SOAP corriendo en el puerto ${port}, asegúrese de iniciar el servicio de MongoDB`
	)
);
soap.listen(server, "/service", serviceObject, wdsl);
