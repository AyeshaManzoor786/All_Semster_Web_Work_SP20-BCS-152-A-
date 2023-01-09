//middleware is the function and has 3 parameters
//private key is used for sign in thats  why its protection is very important
//token generate logic should bi models
const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models/user");
async function auth(req, res, next) {
  //check existing token is fetched or not---if it is present
  let token = req.header("x-auth-token");
  if (!token) return res.status(400).send("Token Not Provided");
  //verify the token
  if (!token) return res.status(400).send("Token Not Provided");
  try {
    let user = jwt.verify(token, config.get("jwtPrivateKey"));

    req.user = await User.findById(user._id); //successfully generate the token
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  next();
}

module.exports = auth;
