const Product = require("../models/Product");

class ProductController {
static async getAllProducts(req,res)  {

  try {
    const products=await Product.find({})

    return res.status(200).send(products)


  } catch (error) {
    return res.status(500).send(error)
  }
}





  static async createProduct(req, res) {
    try {
      const { name, price, image } = req.body;

      const newProduct = new Product({
        name: name,
        price: price,
        image: image,
      });

      await newProduct.save();
      if(newProduct)       return res.status(201).send("Product created successfully");
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  static async editProduct(req, res) {
    try {
      const productModified = await Product.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body
      );

      return res.status(200).send("Product modified succesfully");
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  static async deleteProduct(req,res) {

  try{
   const removedProduct=await Product.deleteOne(  {_id:req.params.id})
   

return res.status(200).send("Product removed successfully")
  }

catch(error)  {
return res.status(500).send(console.log(error))

}

  }

}

module.exports = ProductController;
