
const { Router } = require('express');

const router = Router();


// crear un nuevo usuario
router.post('/new', (req, res)=> {

    return res.json({
        ok : true,
        msg : 'Crear usuarios /new'
    })
});


// Login de usuario
router.post('/', (req, res)=> {

    return res.json({
        ok : true,
        msg : 'Login usuario'
    })
});



// validar y revalidar token
router.get('/renew', (req, res)=> {

    return res.json({
        ok : true,
        msg : 'Renew'
    })
})


module.exports = router;