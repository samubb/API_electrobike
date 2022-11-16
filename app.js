//vincular clases o archivos
const Server = require('./models/server')

//permite emplear el .env
require('dotenv').config(); //Cargar toda la importación

//instanciar un objeto de la clase Server
const server = new Server();

//Escuchar el puerto 
server.listen()