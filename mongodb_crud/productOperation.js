const ProductModel = require("./models/productModels");
//create product
const createProduct = async (title, price, tags) => {
  console.log("Create Product");
  let product = new ProductModel();
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};
//read the product
const getAllProducts = async () => {
  let products = await ProductModel.find();
  return products;
};

//delete Product
const deleteProducts = async (_id) => {
  let products = await ProductModel.findByIdAndDelete(_id);
  return products;
};

//update Product
const updateProduct = async (_id, title, price, tags) => {
  console.log("Update Product");
  let product = await ProductModel.findById(_id);
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};
module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.deleteProducts = deleteProducts;
module.exports.updateProduct = updateProduct;
