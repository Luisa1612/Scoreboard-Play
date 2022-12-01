const express = require('express');
const server = express();
const puerto=3000;
const eqRuta = require('./routers/equiposRouter.js')
const prRuta = require('./routers/partidosRouter.js')

//const usRuta = require ('./routers/usuarioRouter.js')

const ctRuta = require('./routers/categoriasRouter.js')
const database = require('./config/database.js')
const cors = require ('cors')

//Crear servidor con "Express"
server.get('/',function (req,res){
    res.send('Pagina Principal');
    res.writeHead(200);
})
//"Cors" se crea para conectar el back con el front
server.use(cors())


//Rutas para partidos, equipos, categorias, etc., desde el index
server.use(express.json())
server.use('/equipos', eqRuta)
server.use('/partidos', prRuta)
server.use('/categorias', ctRuta)
//server.use('/usuario/', usRuta)



server.listen(puerto, function(){
    console.log('Servidor Activo y escuchando.');
})
database()

