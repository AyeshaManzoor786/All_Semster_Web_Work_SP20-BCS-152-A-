var mongoose = require("mongoose");
const joi = require("@hapi/joi");
const Joi = require("@hapi/joi");
var bcrypt = require("bcryptjs");
//model is used for quries on mongoDB
var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
}); //hash logic is also present in models not routes
userSchema.methods.generateHashedPassword = async function () {
  let salt = await bcrypt.genSalt(10); //create dummy string which is the starting point of randomization---with the help of it we hash our password
  this.password = await bcrypt.hash(this.password, salt);
};
var User = mongoose.model("User", userSchema);
//fatty models and skinny controllers
//Authentication ----validation
//Validation should be in models---so that we can check it
//------Sign Up User--------------
function validateUser(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().min(3).max(10).required(),
    password: Joi.string().min(3).max(10).required(),
  });
  return schema.validate(data, { abortEarly: false }); //abortEarly->if one validation is false then it is not going to  another field
}
//---------------Login User----------
function validateUserLogin(data) {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(10).required(),
    password: Joi.string().min(3).max(10).required(),
  });
  return schema.validate(data, { abortEarly: false }); //abortEarly->if one validation is false then it is not going to  another field
}
module.exports.User = User;
module.exports.validate = validateUser; //validation for sign up
module.exports.validateUserLogin = validateUserLogin; //validation for Login
