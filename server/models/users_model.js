const { Schema, model} = require('mongoose');

const userSchema = new Schema (
    {
        nombre: String,
        apellido: String,
        edad: String,
        genero: String,
        contraseña:String
    }
)

module.exports = model('User', userSchema);