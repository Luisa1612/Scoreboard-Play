const mongoose = require('mongoose');

//Establecer Schema (esquema)
const usuarioSchema=mongoose.Schema(
    {
        nombre: {
            type:String,
            required:true,
            trim:true,
        },

        correo: {
            type:String,
            required:true,
            trim:true,
        },

        contrasena: {
            type:String,
            required:true,
            trim:true,
        },        
        
        fcreado:{
            type:Date,
            default:Date.now(),
        },
        
    }
)

module.exports=mongoose.model('usuario', usuarioSchema);

