var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("products");
});
/* GET product page. */
router.get("/product", function (req, res, next) {
  res.send("<h1>Hello Products</h1>");
});
/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contactus");
});

module.exports = router;
