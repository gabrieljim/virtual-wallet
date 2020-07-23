var soap = require("soap");
var express = require("express");
var fs = require("fs");

function sayHello(args) {
	console.log(args);
	const name = args.name;

	return { greeting: `hello ${name}` };
}

// the service
var serviceObject = {
	HelloService: {
		HelloServiceSoapPort: {
			SayHello: sayHello
		}
	}
};

// load the WSDL file
var xml = fs.readFileSync("service.wsdl", "utf8");
// create express app
var app = express();

// root handler
app.get("/", function(req, res) {
	res.send(
		'Node Soap Example!<br /><a href="https://github.com/macogala/node-soap-example#readme">Git README</a>'
	);
});

// Launch the server and listen
var port = 8000;
app.listen(port, function() {
	console.log("Listening on port " + port);
	var wsdl_path = "/wsdl";
	const server = soap.listen(app, wsdl_path, serviceObject, xml);

	server.log = function(type, data) {
		console.log(type, data);
	};

	console.log(
		"Check http://localhost:" +
			port +
			wsdl_path +
			"?wsdl to see if the service is working"
	);
});
