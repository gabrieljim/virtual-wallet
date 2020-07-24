const path = require("path");
const express = require("express");
const app = express();

const methods = require("./methods");
const allowIfLoggedIn = require("./utils/allowIfLoggedIn");

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.json());

app.post("/api/get-status", allowIfLoggedIn, methods.getStatus);

app.post("/api/add-funds", allowIfLoggedIn, methods.addFunds);

app.post("/api/pay", allowIfLoggedIn, methods.pay);

app.post("/api/confirm-pay", allowIfLoggedIn, methods.confirmPay);

app.post("/api/register", methods.registerUser);

app.post("/api/login", methods.login);

app.get("*", (_, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = 8000;
app.listen(port, () => {
	console.log(`Servicio REST corriendo en el puerto ${port}`);
});
