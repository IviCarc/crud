const User = require("../models/users_model");

const userCtrl = {};

const regex = {
	nombre: /^[a-zA-Z]{4,16}$/,
	apellido: /^[a-zA-Z]{4,16}$/,
	edad: /^[0-9]{2,2}$/,
	genero: /hombre|mujer|otro/,
};

const validar = (req) => {
	for (let key in req) {
		if (regex[key].test(req[key]) === false) {
			console.log(req[key]);
			return false;
		}
	}
	return true;
};

userCtrl.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.status(400).json({
			error: err,
		});
	}
};

userCtrl.newUser = async (req, res) => {
	// AGREGAR VALIDACIÓN

	let obj = {
		nombre: req.body.nombre,
		edad: req.body.edad,
		apellido: req.body.apellido,
		genero: req.body.genero,
	};

	if (validar(obj) === false) {
		console.log("TE AGARRE WACHIN");
		return;
	}

	obj.edad = parseInt(obj.edad);

	try {
		const newUser = new User(obj);
		await newUser.save();
		res.send(200);
	} catch (err) {
		console.log(err);
		res.send(415);
	}
};

userCtrl.editUser = async (req, res) => {
	// AGREGAR VALIDACIÓN
	try {
		await User.findByIdAndUpdate(req.params.id, req.body); // See options
		res.send("Usuario editado");
	} catch (err) {
		console.log(err);
	}
};

userCtrl.deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.json("Usuario eliminado");
	} catch (err) {
		console.log(err);
	}
};

module.exports = userCtrl;
