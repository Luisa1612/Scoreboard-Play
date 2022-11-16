const mongoose = require('mongoose');

//Establecer Schema (esquema)
const equiposSchema=mongoose.Schema(
    {
        nombre: {
            type:String,
            required:true,
            trim:true,
        }
        
        /*
        fcreado:{
            type:Date,
            default:Date.now()
        }*/
    }
)

module.exports=mongoose.model('equipos', equiposSchema)