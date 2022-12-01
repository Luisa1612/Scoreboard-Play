const usuarioModel = require ('../models/usuarioSchema.js')
const bcryptjs = require('bcryptjs')


const usuarioGuardar = async (req, res)=>{
    console.log ('Guardando usuario')
    console.log(req.body);
    try {
        const usuario = new usuarioModel(req.body)
        usuario.contrasena = await bcryptjs.hash(usuario.contrasena, 10)
        await usuario.save()

        respuesta = {'msj':'el usuario se guardo con exito'}
        res.status (200).json(respuesta)

    }catch(error){
        console.log ('el error es: '+error)
    }

}

module.exports={usuarioGuardar}