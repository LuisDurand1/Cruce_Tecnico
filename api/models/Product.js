const     {Schema, model}=require("mongoose")


const ProductSchema=new Schema(  {
  name: {
    type:String,
    required:true
  },
  price: {
    type: Number,
    required:true

    // allowNull defaults to true
  },
  image:    {
      type:String,
      required:true

  }

 // We need to choose the model name
},  { timestamps: false }
);

module.exports = model("Product", ProductSchema);

