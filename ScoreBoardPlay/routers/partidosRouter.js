const express = require('express');
const router = express.Router();
const partidosController = require('../controllers/partidosController.js')
/*
const server = express();
const puerto=3000;
*/


router.get('/',function (req,res){
    res.send(partidosController.partidosListar());
})

router.get("/:id", partidosController.partidosObtener);

router.post("/", partidosController.partidosGuardar);

router.put("/", partidosController.partidosActualizar);

router.delete("/:id", partidosController.partidosEliminar);

module.exports = router;