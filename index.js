
const express = require('express');


// crear el servidor de express
const app = express();


app.get('/', (req, res)=> {

    res.json({
        ok : true,
        msg: 'Todo salió como se esperaba',
        uid : 1234
    })
});


//correr la app
app.listen(4000, ()=> {
    console.log(`Aplicación corriendo en el puerto ${4000}`);
})