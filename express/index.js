// //we make a server
// const express=require("express");
// const path=require("path");
// const bodyParser=require("body-parser");
// const app=express();
// const port=2000;
// app.use(bodyParser.urlencoded({extended:false}))
// app.get("/",(req,res)=>{
//     console.log(path.join(__dirname+"/index.html"));
//     res.sendFile(path.join(__dirname+"/index.html"));
// })
// //data read krna
// // app.get("/About",(req,res)=>{
// //     res.send("<h1>About Page </h1>")
// // })
// // app.get("/Contact",(req,res)=>{
// //     res.send("<h1>Contact Us </h1>")
// // })

// app.post("/api/v1/register",(req,res)=>{
//     res.send(  `<h1>Done Miss.${req.body.name}</h1><h2>Your email is:${email}<h3>${req.body}</h3></h2>`)
//     console.log(req.body);
// })

// app.listen(port,()=>{
//     console.log(`server is working on port:${port}`);
// })

// //get=create
// //post=read
// //put=update
// //delete=delete
