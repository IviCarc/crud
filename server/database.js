const mongoose = require("mongoose");

const URL = process.env.DATABASE;

mongoose.connect(URL, {
	useNewUrlParser: true,
	autoIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("Database connected");
});
