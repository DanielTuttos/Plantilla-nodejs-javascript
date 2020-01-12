// Requires
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//Inicializar Variables
const app = express();
const port = process.env.PORT || 3500;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(cors());

//conexion a base de datos
mongoose.connect('mongodb://localhost/hello_world', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;
    console.log('Conectado a base de datos');
});

//importar rutas

const routeUsuario = require('./routes/usuario.routes');

//rutas
app.use('/api/usuario', routeUsuario);


// Escuchar peticiones
app.listen(port, () => { 
    console.log('En puerto '+ port +' online');
});