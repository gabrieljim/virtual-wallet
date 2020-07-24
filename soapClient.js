const soapRequest = require("easy-soap-request");
const xml2js = require("xml2js");
const url = "http://localhost:8001/service";
const createEnvelope = require("./utils/createEnvelope");

const callMethod = async (method, params) => {
	try {
		const xml = createEnvelope(method, JSON.stringify(params));
		const { response } = await soapRequest({
			url,
			headers: {
				"Content-Type": "text/xml;charset=UTF-8"
			},
			xml
		});

		// Luego de recibir la respuesta SOAP, la convertimos a JSON y devolvemos solo elemento "data"
		const xmljson = await xml2js.parseStringPromise(response.body);
		const responseXML = xmljson["soap:Envelope"]["soap:Body"][0];
		const data = responseXML[Object.keys(responseXML)][0]["tns:data"][0];
		console.log(data)
		return JSON.parse(data);
	} catch (e) {
		console.log(e);
	}
};

module.exports = callMethod;
