
const { Router } = require('express');
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();


// crear un nuevo usuario
router.post('/new', crearUsuario);


// Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña no cumple con la longitud').isLength({min : 6}),
]
,loginUsuario);



// validar y revalidar token
router.get('/renew', revalidarToken);


module.exports = router;