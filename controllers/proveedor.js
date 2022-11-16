const Proveedor = require("../models/proveedor")

const getProveedor = async (req, res) =>{
    const proveedores = await Proveedor.find()
    res.json({
        msg: "Proveedor GET API",
        proveedores
    })
}

const postProveedor = async (req, res) => {
    const {tipoProveedor,tipoDocumento,documento,nombre,telefono} = req.body

    const proveedor1 = new Proveedor ({tipoProveedor,tipoDocumento,documento,nombre,telefono})
    await proveedor1.save()

    res.json({
        msg:"Proveedor POST API",
        proveedor1
    })

}

//put modificacion de todos los datos
const putProveedor = async(req, res)=>{
    const {tipoProveedor, tipoDocumento, documento, nombre, telefono}= req.body
    const proveedor1 = await Proveedor.findOneAndUpdate({documento : documento}, {tipoProveedor:tipoProveedor, tipoDocumento:tipoDocumento, nombre: nombre, telefono:telefono})

    res.json({
        msg:"Proveedor PUT API",
        proveedor1
    })
}


const patchProveedor = async(req, res)=>{
    const {tipoProveedor, tipoDocumento, documento, nombre, telefono}= req.body
    const proveedor1 = await Proveedor.findOneAndUpdate({documento : documento}, {nombre: nombre})

    res.json({
        msg:"Proveedor PATCH API",
        proveedor1
    })
}

const deleteProveedor = async (req, res)=>{
    const { documento } = req.query //y el query solo actua con el parametro propio

    const proveedor1= await Proveedor.findOneAndDelete ({documento: documento})

    res.json({
        msg:"Proveedor DELETE API",
        proveedor1
    })
}

module.exports={
    getProveedor,
    postProveedor,
    deleteProveedor,
    putProveedor,
    patchProveedor
}