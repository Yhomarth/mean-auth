const { request, response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

const crearUsuario = async (req = request, res = response )=> {
    
    const { name, email, password } = req.body;

    try {
        // Verificar el Email
        const usuario = await Usuario.findOne({ email });

        if(usuario) {
            return res.status(400).json({
                ok : false,
                msg : 'Ya existe un usuario con este email'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario( req.body );

        // Hash la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generar el JWT


        // crear Usuario de base de datos
        await dbUser.save();



        // Generar respuesta exitosa
        return res.status(201).json({
            ok : true,
            uid : dbUser.id,
            name
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            msg : 'Error ACDB - comunicar con el administrador'
        });
    }

    
};


const loginUsuario = (req = request, res = response)=> {

   const { email, password } = req.body;

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