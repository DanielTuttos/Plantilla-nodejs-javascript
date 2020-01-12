const { Schema, model } = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


// let rolesValidos = {
//     values: ['ADMIN_ROLE', 'USER_ROLE'],
//     MESSAGE: '{VALUE} no es un role permitido'
// };

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    imagePath: { type: String }
});

usuarioSchema.plugin(uniqueValidator, { message: 'El {PATH} debe de ser unico' });

module.exports = model('Usuario', usuarioSchema);