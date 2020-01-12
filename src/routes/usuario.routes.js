const express = require('express');

const app = express();

const Usuario = require('../models/usuario.model');


// ====================================
// Obtener todos los usuarios
// ====================================

app.get('/', (req, res) => {

    Usuario.find({}, (err, usuarios) => {
        if (err) {
            return res.json({
                ok: false,
                Error: err
            });
        }

        return res.json({
            ok: true,
            usuarios: usuarios
        });
    });
    
});



module.exports = app;
