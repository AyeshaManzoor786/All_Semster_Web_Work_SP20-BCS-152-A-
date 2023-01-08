const express = require("express");
const app = express();
app.use(express.json());
const products = ["laptops", "LCD", "mobile", "TV"];
app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});
//first parametre is url
// second parameter is callback function
app.get("/api/products", (req, res) => {
  res.send(products);
});

//get one item
app.get("/api/products/1", (req, res) => {
  res.send(products[1]);
});

//how get in input in routes
app.get("/api/products/:index", (req, res) => {
  if (!products[req.params.index])
    return res.status(404).send("Product is not found");
  res.send(products[req.params.index]);
});

//update
app.put("/api/products/:index", (req, res) => {
  console.log(req.body);
  products[req.params.index] = req.body.name;
  res.send(products[req.params.index]);
});

//delete
app.delete("/api/products/:index", (req, res) => {
  products.splice(req.params.index, 1); //as we use array that why use splice funtcion
  res.send(products);
});

//post---- create---
app.post("/api/products", (req, res) => {
  products.push(req.body.name); //we add the new value in the array
  res.send(products);
});
app.listen(4000);
