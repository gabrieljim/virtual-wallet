const createEnvelope = (method, data) => {
	const xml = `
	<soap:Envelope 
		xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
		xmlns:tns="http://localhost:8000/wsdl?wsdl"
		>
			<soap:Body>
					<tns:${method}>
							<data>${data}</data>
					</tns:${method}>
			</soap:Body>
	</soap:Envelope>
	`;
	return xml;
} 

module.exports = createEnvelope;
