const categoriasListar=()=>{
    //Crear listado clave valor
    listado ={
        '1':'Futbol',
        '2':'Basketball',
        '3':'Boleiboll',
        '4':'Natación',
        '5':'Ciclismo',
        '6':'Patinaje'   
    }    
    return {listado};
}

const categoriasGuardar = async (req,res)=>{
    console.log(req.body);
    const nombre = req.body.nombre//Extraer el nombre de la consulta y guardarlo en variable nombre
    let respuesta={}
    if(nombre==''){
        respuesta = {'msj':'Categoria Vacia, el nombre es requerido'}
         res.status(400).json(respuesta)
    }else{
        respuesta = {'msj':'Categoria almacenada con exito'}
        res.status(200).json(respuesta)
    }
}

const categoriasObtener= async (req, res)=>{
    const id=req.params.id
    console.log(id)
    let c
    if(id == 1)
        c = {'1': 'Futbol'}
    if(id == 2)
        c = {'2': 'Basketball'}
    res.status(200).json(c)
}

const categoriasActualizar=async(req, res)=>{
    console.log('put:')
    const {id, nombre}=req.body;
    try{
        if(id == ''){
            res.status(400).send('Error campo vacio, esta informacion es requerida')
        }
        if(nombre!=''){
            console.log('Categoria Actualizada')
            res.status(200).send('Actualizado con exito')
        }

    }catch(error){
        console.log('error' + error);
        res.status(400).send("Error al actualizar")
    }
}

const categoriasEliminar=async(req, res)=>{
    console.log(req.body.id);
    /*console.log("delete: " + req.params.id)*/
    const id=req.params.id;
    try{        
        if(id==''){
            res.status(400).send("error al eliminar");
        }
        console.log("Categoria eliminada")
        res.status(200).send("Categoria eliminada")
             

    }catch(error){
        console.log("error: "+error);
        res.status(400).send('Error al aliminar la categoria');
    }
}


module.exports={categoriasListar, categoriasGuardar, categoriasObtener, categoriasActualizar, categoriasEliminar};