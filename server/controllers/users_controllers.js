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
	let obj = {
		nombre: req.body.nombre,
		edad: req.body.edad,
		apellido: req.body.apellido,
		genero: req.body.genero,
	};

	if (validar(obj) === false) {
		res.sendStatus(400);
		return;
	}

	obj.edad = parseInt(obj.edad);

	try {
		const newUser = new User(obj);
		await newUser.save();
		res.sendStatus(200);
	} catch (err) {
		console.log(err);
		res.status(400).json({
			error: err,
		});
	}
};

userCtrl.editUser = async (req, res) => {
	let obj = {
		nombre: req.body.nombre,
		edad: req.body.edad,
		apellido: req.body.apellido,
		genero: req.body.genero,
	};

	if (validar(obj) === false) {
		res.sendStatus(400);
		return;
	}

	obj.edad = parseInt(obj.edad);

	try {
		await User.findByIdAndUpdate(req.params.id, req.body); // See options
		res.status(200).send("Usuario editado");
	} catch (err) {
		console.log(err);
		res.status(400).json({
			error: err,
		});
	}
};

userCtrl.deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("Usuario eliminado");
	} catch (err) {
		console.log(err);
		res.status(400).json({
			error: err,
		});
	}
};

module.exports = userCtrl;
