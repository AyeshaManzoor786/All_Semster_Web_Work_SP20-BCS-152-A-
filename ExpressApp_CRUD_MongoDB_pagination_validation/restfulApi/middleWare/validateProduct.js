//middleware is the function and has 3 parameters
const { validate } = require("../models/product");
function validateProduct(req, res, next) {
  let { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message); //proper validate the thing steps by step
  next();
}

module.exports = validateProduct;
