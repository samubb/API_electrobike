const express = require("express")
const cors = require("cors")

const {dbConnection}  = require ("../database/config")

class Server{
    constructor(){
        this.app= express()
        this.port = process.env.PORT
        this.ventasPath= "/api/ventas"
        this.proveedoresPath= "/api/proveedores"
        this.clientesPath= "/api/clientes"

        this.middlewares()
        this.conectarDB()
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){//otras funcionalidades
        this.app.use( cors() )
        this.app.use( express.static("public"))
        this.app.use(express.json())//permite que la peticion reciba peticiones tipo json
    }

    routes(){
        this.app.use( this.ventasPath, require("../routes/ventas"))
        this.app.use( this.clientesPath, require("../routes/clientes"))
        this.app.use( this.proveedoresPath, require("../routes/proveedores"))
    }
    
    listen(){//para escuchar el puerto
        this.app.listen(this.port, (req, res)=>{
            console.log(`escuchando por el puerto ${this.port}`)
        }) 

    }
}
module.exports=Server