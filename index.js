
const express = require('express');
const cors = require('cors');
const { dbConection } = require('./db/config');
require('dotenv').config();


// crear el servidor de express
const app = express();

// conexion a la base de datos
dbConection();

// directorio público
app.use( express.static('public') )

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