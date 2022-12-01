const express = require ('express')
const router = express.Router()
const usuarioControl = require('../controllers/usuarioController.js')

router.post('/',usuarioControl.usuarioGuardar)


module.exports = router