
const express = require('express');
const cors = require('cors');
require('dotenv').config();

console.log(process.env);

// crear el servidor de express
const app = express();

//Cors
app.use( cors() );

//lectura y parseo del body
app.use( express.json() );

// rutas
app.use('/api/auth', require('./routes/auth'));


//correr la app
app.listen(process.env.PORT, ()=> {
    console.log(`Aplicación corriendo en el puerto ${process.env.PORT}`);
})