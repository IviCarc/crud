const User = require('../models/users_model');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } 
    catch (err) {
        // res.status(400).json ({
        //     error:err
        // })
    }
};

userCtrl.newUser =  async (req, res) => {
    let obj = {
        nombre:req.body.nombre.value,
        edad:req.body.edad.value,
        apellido:req.body.apellido.value,
        genero:req.body.genero.value,
    }
    try  {
        console.log(obj)
        const newUser = new User(obj);
        await newUser.save();
        res.send("gracias")
    } catch (err) {
        console.log(err);
    }
};

userCtrl.editUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id , req.body) // See options
        res.send("Usuario editado");
    } catch (err) {
        console.log(err)
    }
};

userCtrl.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json("Usuario eliminado")
    } catch (err) {
        console.log(err)
    }
};

module.exports = userCtrl;