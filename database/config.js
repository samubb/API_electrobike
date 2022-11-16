const mongoose =  require("mongoose")


const dbConnection = async()=>{
    try{
        mongoose.connect(process.env.MONGODB_CNN, {})
        console.log("estableciendo conexion con la base de datos")
    }
    catch( err ){
        console.log("conexion no establecida")
    }
}

module.exports={
    dbConnection
}