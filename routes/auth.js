
const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();


// crear un nuevo usuario
router.post('/new', crearUsuario);


// Login de usuario
router.post('/', loginUsuario);



// validar y revalidar token
router.get('/renew', revalidarToken);


module.exports = router;