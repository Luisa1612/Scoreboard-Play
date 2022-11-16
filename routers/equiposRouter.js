const express = require('express');
const router = express.Router();
const equiposControllers=require('../controllers/equiposController.js');

// no es necesario el puerto ya esta en el index.js
// const puerto=3000;


router.get('/',function (req,res){
    res.send(equiposControllers.equipoListar());
})

router.get("/:id", equiposControllers.equiposObtener);

router.post("/", equiposControllers.equiposGuardar);

router.put("/", equiposControllers.equiposActualizar);

router.delete("/:id", equiposControllers.equiposEliminar);


module.exports=router;


