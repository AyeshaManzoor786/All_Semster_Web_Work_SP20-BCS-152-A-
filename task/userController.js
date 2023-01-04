const userRegister=(req,res)=>{
    const userName=req.body.name;
    const userEmail=req.body.email;
    const userPassword=req.body.password;
      res.json({
          success: true,
        //   name:userName,
        //   email:userEmail,
        //   password:userPassword,
      });
    }
  

const user=(req,res)=>
    {
        res.json({
            "name":"Ayesha",
            "email":"ayesha@gamil.com",
            "password":"123456",
        })
    }
module.exports=userRegister;
module.exports=user;