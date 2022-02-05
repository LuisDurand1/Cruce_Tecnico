const express=require("express")
const productRouter=require("./product")
const router=express.Router()

//Divido la ruta hacia products
router.use("/products",productRouter)


module.exports=router