const path = require("path");
const express = require("express");
const app = express();

const callMethod = require("./soapClient");

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.json());

app.post("/api/register", async (req, res) => {
	const response = await callMethod("RegisterUser", req.body);
	if (response.error) {
		res.json({ error: response.error });
	} else {
		res.json({ msg: "success" });
	}
});

app.post("/api/login", async (req, res) => {
	const response = await callMethod("Login", req.body);
	if (response.error) {
		res.json({ error: response.error });
	} else {
		res.json({ msg: "success" });
	}
})

app.get("*", (_, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = 8000;
app.listen(port, () => {
	console.log(`Servicio REST corriendo en el puerto ${port}`);
});
