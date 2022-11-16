const Cliente = require("../models/cliente")

const getCliente = async (req, res) =>{
    const clientes = await Cliente.find()
    res.json({
        msg: "Cliente GET API",
        clientes
    })
}

const postCliente = async (req, res) => {
    const {tipoDocumento,documento,nombre,telefono,correo} = req.body //el body trae todo lo que encuentre 

    const cliente1 = new Cliente ({tipoDocumento,documento,nombre,telefono,correo})
    await cliente1.save()

    res.json({
        msg:"Cliente POST API",
        cliente1
    })

}

//put modificacion de todos los datos
const putCliente = async(req, res)=>{
    const {tipoDocumento,documento,nombre,telefono,correo}= req.body
    const cliente1 = await Cliente.findOneAndUpdate({tipoDocumento : tipoDocumento }, {documento : documento, nombre: nombre, telefono:telefono, correo:correo})

    res.json({
        msg:"Cliente PUT API",
        cliente1
    })
}


//patch modificacion parcial
const patchCliente = async(req, res)=>{
    const {tipoDocumento,documento,nombre,telefono,correo}= req.body
    const cliente1 = await Cliente.findOneAndUpdate({documento : documento}, {nombre : nombre})

    res.json({
        msg:"Cliente PATCH API",
        cliente1
    })
}


const deleteCliente = async (req, res)=>{
    const { documento } = req.query //y el query solo actua con el parametro propio

    const cliente1= await Cliente.findOneAndDelete ({documento: documento})

    res.json({
        msg:"Cliente DELETE API",
        cliente1
    })
}

module.exports={
    getCliente,
    postCliente,
    deleteCliente,
    putCliente,
    patchCliente
}