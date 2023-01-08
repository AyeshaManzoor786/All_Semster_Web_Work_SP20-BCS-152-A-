//model is sample class and we use it instance after the connection
//create Schema
const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: String,
  tags: [String],
  price: Number,
  slug: {
    type: String,
    lowercase: true,
  },
});
//create model
const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
