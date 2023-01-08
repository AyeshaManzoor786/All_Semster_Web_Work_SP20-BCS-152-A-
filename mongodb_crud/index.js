const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  deleteProducts,
  updateProduct,
} = require("./productOperation");
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/Products")
  .then(async () => {
    console.log("MonoDB is successfully connected");
    // let product = await createProduct("Dell", 10000, ["funny", "classy"]);
    // console.log(product);
    // let allProducts = await getAllProducts();
    // console.log(allProducts);
    // console.log(await deleteProducts("63bb3c215d4c22485b563225"));
    let updatedProduct = updateProduct(
      "63bb3a05e85280100aca9910",
      "HP",
      20000,
      ["maza", "study"]
    );
    console.log(updatedProduct);
  })
  .catch((err) => {
    console.log("Error in connecting");
    console.log(err);
  });
app.listen(3000);
