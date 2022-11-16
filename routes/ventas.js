const { Router } = require("express")
const router = Router() //obtener la funcion Router 

const {getVenta, postVenta, putVenta, patchVenta, deleteVenta} = require ("../controllers/venta")

router.get("/", getVenta)
router.post("/", postVenta)
router.put("/", putVenta)
router.patch("/", patchVenta)
router.delete("/", deleteVenta)


//exportar modulo 
module.exports= router