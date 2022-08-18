const { request, response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

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
        const token = await generarJWT(dbUser.id, name);


        // crear Usuario de base de datos
        await dbUser.save();



        // Generar respuesta exitosa
        return res.status(201).json({
            ok : true,
            uid : dbUser.id,
            name,
            token
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            msg : 'Error ACDB - comunicar con el administrador'
        });
    }

    
};


const loginUsuario = async (req = request, res = response)=> {

   const { email, password } = req.body;

   try {

    const dbUser = await Usuario.findOne({ email });

    if(!dbUser) {
        return res.status(400).json({
            ok : false,
            msg : 'El correo no existe'
        });
    }

    // confirmar si el password hace match
    const validPassword = bcrypt.compareSync( password, dbUser.password );

    if(!validPassword) { 

        return res.status(400).json({
            ok : false,
            msg : 'El password no es válido'
        })

    }

    //generar el JWT
    const token = await generarJWT(dbUser.id, dbUser.name); 

    // respuesta del servicio
    return res.status(201).json({
        ok : true,
        uid : dbUser.id,
        name : dbUser.name,
        token
    })
    
   } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok : false,
            msg : 'Error HB34D - comunique con el administrador'
        });
   }

   
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