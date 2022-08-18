const { request, response } = require('express')

const crearUsuario = (req = request, res = response )=> {

    const { name, email, password } = req.body;

    console.log( name, email, password );

    return res.json({
        ok : true,
        msg : 'Crear usuarios /new'
    });
};


const loginUsuario = (req = request, res = response)=> {

   const { email, password } = req.body;

    console.log( email, password );

    return res.json({
        ok : true,
        msg : 'Login usuario'
    });
};

const revalidarToken = (req = request, res = response)=> {

    return res.json({
        ok : true,
        msg : 'Renew'
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
    
}