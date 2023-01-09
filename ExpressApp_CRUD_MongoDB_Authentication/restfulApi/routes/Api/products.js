//fatty models and skinny controllers
//Router -->controllers

const express = require("express");
const { response } = require("../../app");
let router = express.Router();
const validateProduct = require("../../middleWare/validateProduct");
const auth = require("../../middleWare/auth");
var { Product } = require("../../models/product");
const admin = require("../../middleWare/admin");

//get all products
router.get("/", async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1); //skip your record
  console.log(req.query); //jitny bi variables hn un ko json me rakhwa dy ga
  let products = await Product.find().skip(skipRecords).limit(perPage);
  return res.send(products);
});
//get single product
router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product)
      return res.status(400).send("Product with given Id is not present");
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send("Invalid ID"); //invalid format of id
  }
});

//update the product
router.put("/:id", validateProduct, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    product.tags = req.body.tags;
    product.title = req.body.title;
    product.price = req.body.price;
    await product.save();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send("Invalid ID"); //invalid format of id
  }
});
//delete the product
router.delete("/:id", auth, admin, async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  return res.send(product);
});
//insert the product
router.post("/", validateProduct, async (req, res) => {
  //   let { error } = validate(req.body);
  //   if (error) return res.status(400).send(error.details[0].message); //proper validate the thing steps by step
  let product = new Product();
  product.tags = req.body.tags;
  product.title = req.body.title;
  product.price = req.body.price;
  await product.save();
  return res.status(200).send(product);
});
module.exports = router;
