const { Schema, model} = require('mongoose');

const userSchema = new Schema (
    {
        nombre: String,
        apellido: String,
        edad: Number,
        genero: String,
        contraseña:String
    }
)

module.exports = model('User', userSchema);