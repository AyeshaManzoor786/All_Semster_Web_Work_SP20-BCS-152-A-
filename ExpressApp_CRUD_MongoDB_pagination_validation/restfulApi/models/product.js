var mongoose = require("mongoose");
const joi = require("@hapi/joi");
const Joi = require("@hapi/joi");
//model is used for quries on mongoDB
var productSchema = mongoose.Schema({
  tags: Array,
  title: String,
  price: Number,
});
var Product = mongoose.model("Product", productSchema);
//fatty models and skinny controllers
//Authentication ----validation
//Validation should be in models---so that we can check it
function validateProduct(data) {
  const schema = Joi.object({
    tags: Joi.array().items(Joi.string().alphanum()),
    title: Joi.string().min(3).max(10).required(),
    price: Joi.number().min(3).required(),
  });
  return schema.validate(data, { abortEarly: false }); //abortEarly->if one validation is false then it is not going to  another field
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
