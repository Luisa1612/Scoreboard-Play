const partidosModel = require('../models/partidosSchema.js')

const partidosListar= async (req, res)=>{
    const partidos = await partidosModel.find()
    res.status(200).send(partidos)

    //Crear listado clave valor
    /*
    fecha1 ={
        "Grupo A": [{
        '1':'Millonarios vs Santa Fe',
        '2':'Pereira vs Junior'
        }], 
        "Grupo B":[{
        '1':'Aguilas Doradas vs America',
        '2':'Medellin vs Pasto',
        }],       
    }
    
    fecha2 ={
        "Grupo A":[{
        '1':'Santafe vs Pereira',
        '2':'Junior vs Millonarios',
        }],
        "Grupo B":[{
        '1':'America vs Medellin',
        '2':'Pasto vs Aguilas Doradas',
        }],                
    }

    fecha3 ={
        "Grupo A":[{
        '1':'Santafe vs Junior',
        '2':'Millonarios vs Pereira',
        }],
        "Grupo B":[{
        '1':'America vs Pasto',
        '2':'Medellin vs Aguilas Doradas',
        }],                
    }
    
        return {fecha1, fecha2, fecha3};*/
    
}

const partidosGuardar = async (req,res)=>{
    console.log(req.body);
    const nombre = req.body.nombre//Extraer el nombre de la consulta y guardarlo en variable nombre
    let respuesta={}
    if(nombre==''){
        respuesta = {'msj':'Partidos Vacio, el nombre es requerido'}
         res.status(400).json(respuesta)
    }else{
        try{
        const partidos = new partidosModel(req.body);
        partidos.save()
        respuesta = {'msj':'Partido almacenado con exito'};
        res.status(200).json(respuesta);
        }catch(error){
            console.log('El error de conexion es: ' + error);
        }
    }
}

const partidosObtener= async (req, res)=>{
    const id=req.params.id
    console.log(id)
    let encuentro
    if(id == 1)
        encuentro= {'1': 'GrupoA: Millonarios vs Santafe'}
    if(id == 2)
        encuentro = {'2': 'GrupoA: Pereira vs Junior'}
    if(id == 3)
        encuentro= {'3': 'GrupoB: Aguilas Doradas vs America'}
    if(id == 4)
        encuentro = {'4': 'GrupoB: Medellin vs Pasto'}

    res.status(200).json(encuentro)
}

const partidosActualizar=async(req, res)=>{
    console.log('put:')
    const {id, nombre}=req.body;
    try{
        if(id == ''){
            res.status(400).send('Error campo vacio, esta informacion es requerida')
        }
        if(nombre!=''){
            console.log('Partidos Actualizados')
            res.status(200).send('Partidos actualizados con exito')
        }

    }catch(error){
        console.log('error' + error);
        res.status(400).send("Error al actualizar")
    }
}

const partidosEliminar=async(req, res)=>{
    console.log("del" + req.params.id)
    try{
        id=req.params.id
        if(id==''){
            res.status(400).send("error al eliminar")
        }
        console.log("Partido eliminado")
        res.status(200).send("Partido eliminado con exito")
             

    }catch(error){
        console.log("error"+error)
        res.status(400).send('Error al aliminar el partido');
    }
}    


module.exports={partidosListar, partidosGuardar, partidosObtener, partidosActualizar, partidosEliminar};