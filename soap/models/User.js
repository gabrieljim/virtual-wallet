const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	document: {
		type: String,
		unique: true
	},
	firstName: String,
	lastName: String,
	email: {
		type: String,
		unique: true
	},
	phone: String,
	wallet: {
		type: Number,
		default: 0
	},
	tempToken: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;
