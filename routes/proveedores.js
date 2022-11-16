const { Router } = require("express")
const router = Router() //obtener la funcion Router 

const {getProveedor, postProveedor, putProveedor, patchProveedor,deleteProveedor} = require ("../controllers/proveedor")

router.get("/", getProveedor)
router.post("/", postProveedor)
router.put("/", putProveedor)
router.patch("/", patchProveedor)
router.delete("/", deleteProveedor)

//exportar modulo 
module.exports= router