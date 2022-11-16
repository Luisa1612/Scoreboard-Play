const express = require('express');
const server = express();
const puerto=3000;
const eqRuta = require('./routers/equiposRouter.js')
const prRuta = require('./routers/partidosRouter.js')
const ctRuta = require('./routers/categoriasRouter.js')
const database = require('./config/database.js')

//Crear servidor con "Express"
server.get('/',function (req,res){
    res.send('Pagina Principal');
    res.writeHead(200);
})
/* // Aqui nos llevamos esto a las ruras (otros archivos)
server.get('/equipos',function (req,res){
    res.send('Hola equipos');
})

server.get('/partidos',function (req,res){
    res.send('Hola partidos');
})
*/

//Rutas para partidos, equipos, categorias, etc., desde el index
server.use(express.json())
server.use('/equipos', eqRuta)
server.use('/partidos', prRuta)
server.use('/categorias', ctRuta)


server.listen(puerto, function(){
    console.log('Servidor Activo y escuchando.');
})
database()
