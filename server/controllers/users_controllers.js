const User = require('../models/users_model');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        console.log(err)
        res.status(400).json ({
            error:err
        })
    }
};

userCtrl.newUser =  async (req, res) => {
    try  {
        const obj  = req.body;
        console.log(obj);
        res.send("gracias")
        const newUser = new User(obj);
        await newUser.save();
    } catch (err) {
        console.log(err);
    }
};

userCtrl.getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.find({nombre:id});
        res.json(user);
    } catch (err) {
        console.log(err);
    }
};

userCtrl.editUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body) // See options
        res.send(user);
    } catch (err) {
        console.log(err)
    }
};

userCtrl.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        await User.deleteOne({id:id});
        res.send("corta")
    } catch (err) {
        console.log(err)
    }
};

module.exports = userCtrl;