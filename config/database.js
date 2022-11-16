const mongoose = require('mongoose');
//Conectar la base de datos
const URIDB='mongodb://127.0.0.1:27017/scoreboardplay'


module.exports=()=>{
    const conect =()=>{
        //Conectar a la base datos
        mongoose.connect(
            URIDB,
            {
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true,
            },
            (error)=>{
                if (error){
                    console.log('Error en la conexion a la BD' + error)
                }else{
                    console.log('Conexion exitosa')
                }
            }    
        )

    }
    conect()
}