const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	document: {
		type: String,
		unique: true
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	email: {
		type: String,
		unique: true
	},
	phone: {
		type: String
	}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
