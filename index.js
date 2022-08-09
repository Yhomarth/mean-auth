
const express = require('express');


// crear el servidor de express
const app = express();


// rutas
app.use('/api/auth', require('./routes/auth'));


//correr la app
app.listen(4000, ()=> {
    console.log(`Aplicación corriendo en el puerto ${4000}`);
})