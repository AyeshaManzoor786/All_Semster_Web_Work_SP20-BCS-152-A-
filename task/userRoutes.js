const express=require('express');
const userRegister=require('./userController');
const user=require('./userController');
const router=express.Router();//we make router

router.route("/register").post(userRegister);
router.route("/register").get(user);

module.exports=router;