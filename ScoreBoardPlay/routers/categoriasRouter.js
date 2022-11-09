const express = require('express');
const router = express.Router();
const categoriasControllers=require('../controllers/categoriasController.js');



router.get("/",function (req,res){
    res.send(categoriasControllers.categoriasListar());
})

router.get("/:id", categoriasControllers.categoriasObtener);

router.post("/", categoriasControllers.categoriasGuardar);

router.put("/", categoriasControllers.categoriasActualizar)

router.delete("/:id", categoriasControllers.categoriasEliminar);

module.exports=router;