const { Router } = require("express")
const router = Router() //obtener la funcion Router 

const {getCliente, postCliente, deleteCliente, putCliente, patchCliente} = require ("../controllers/cliente")

router.get("/", getCliente)
router.post("/", postCliente)
router.delete("/", deleteCliente)
router.put("/", putCliente)
router.patch("/", patchCliente)


//exportar modulo 
module.exports= router