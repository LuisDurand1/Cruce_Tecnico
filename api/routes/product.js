const express=require("express")
const router=express.Router()
const ProductController=require("../controllers/productController")

router.get("/",ProductController.getAllProducts)
router.post("/",ProductController.createProduct)
router.delete("/:id",ProductController.deleteProduct)
router.put("/:id",ProductController.editProduct)

module.exports=router