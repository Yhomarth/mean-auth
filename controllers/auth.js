const { request, response } = require('express')

const crearUsuario = (req, res = response )=> {

    return res.json({
        ok : true,
        msg : 'Crear usuarios /new'
    });
};


const loginUsuario = (req = request, res = response)=> {

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