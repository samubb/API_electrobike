const Venta = require("../models/venta")

const getVenta = async (req, res) =>{
    const ventas = await Venta.find()
    res.json({
        msg: "Venta GET API",
        ventas
    })
}

const postVenta = async (req, res) => {
    const {tipoCliente,cliente,categoria,producto,cantidad} = req.body

    const venta1 = new Venta ({tipoCliente,cliente,categoria,producto,cantidad})
    await venta1.save()

    res.json({
        msg:"Venta POST API",
        venta1
    })

}

//put modificacion de todos los datos
const putVenta = async(req, res)=>{
    const {tipoCliente, cliente, categoria, producto, cantidad}= req.body
    const venta1 = await Venta.findOneAndUpdate({ cliente : cliente }, {tipoCliente : tipoCliente, categoria : categoria, producto : producto, cantidad : cantidad})

    res.json({
        msg:"Venta PUT API",
        venta1
    })
}


//patch modificacion parcial
const patchVenta = async(req, res)=>{
    const {tipoCliente, cliente, categoria, producto, cantidad}= req.body
    const venta1 = await Venta.findOneAndUpdate({cliente : cliente}, {cantidad : cantidad})

    res.json({
        msg:"Venta PATCH API",
        venta1
    })
}


const deleteVenta = async (req, res)=>{
    const { cliente } = req.query //y el query solo actua con el parametro propio

    const venta1= await Venta.findOneAndDelete ({cliente : cliente})

    res.json({
        msg:"Venta DELETE API",
        venta1
    })
}


module.exports={
    getVenta,
    postVenta,
    putVenta,
    patchVenta,
    deleteVenta
}