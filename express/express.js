//express is the framework for node...it is used to make server just like in node but in less code.
// we first import express
// const express=require('express');
// const path=require('path');
// const bodyParser=require('body-parser');
// const PORT=8000;
//the we call the express function ...as we call many times that's why we put it in a variable app so that we cannot call them again and again.
// const app=express();//app mean we already call the express
// app.use(bodyParser.urlencoded({extended:false}));//this is the method to access the middleware
//bcrpt-> it is used to change our password in hash before show in the website..your password  in database is original but when in show website in hash through hash table

// app.get("/",(req,res)=> //get take 2 parameter 1-> jis page pr jana ha wo url 2-> kiya bijwana ha us url pr yahi kiya show krwana...
// {
//     // get is the method...
//     //A complete app (full stack) those which perform complete CURD operation But in app and http world, we don't call them CURD we use get(read),post(create),put(update),delete
//     console.log(path.join(__dirname + '/express.html'));
//     res.sendFile(path.join(__dirname+ '/express.html'));//here we use send to send our request on the page
// })
// app.get("/about",(req,res)=> //get take 2 parameter 1-> jis page pr jana ha wo url 2-> kiya bijwana ha us url pr yahi kiya show krwana...
// {
//   res.send("<h1>Abut page</h1>")//here we use send to send our request on the page
// })
// app.get("/service",(req,res)=> //get take 2 parameter 1-> jis page pr jana ha wo url 2-> kiya bijwana ha us url pr yahi kiya show krwana...
// {
//   res.send("<h1>Service page</h1>")//here we use send to send our request on the page
// })
// app.get("/contact",(req,res)=> //get take 2 parameter 1-> jis page pr jana ha wo url 2-> kiya bijwana ha us url pr yahi kiya show krwana...
// {
//   res.send("<h1>Contact page</h1>")//here we use send to send our request on the page
// })

// app.post("/api/v1/login",(req,res)=> //post ka mtlb ha hum data bejy  gy create krny k liya....yahi jo form hum fill kry gy us ka sara data wo colllect ho ga us ko kisi dosri API pr chala jay ga aur waha sa phr create ho ga data
// {
//     //  hum hum html sa data feed kry gy us k bad API pr usko send kry gy through req.body
// //  const userName= req.body.name;//is k through hum user name ko ly kr usko agy hum process kr
// res.send(`<h1>Done Miss :${req.body.name}</h1><h2>Your email is : ${req.body.email}</h2><h3>Your password:${req.body.password}</h3>`);//is ka mtlb yah k jb hum ne form k data ko api pr send kr diya ha tou agr wo successfully submit ho gya ha us api pr tou us ko "done" k through hum pta lagwa rehy hn.
// console.log(req.body);//form k under kiya data aya ha us ko dekhny k liya hum  req.body sa dekhy gy lakin body ko access krny k liya humay body parser ki zaroort hoti ha..is liya us ko hum install kry gy ...yah 3rd party me ataa ha
// // body-parser---> it is a middleware...when we submit the form then for access the data of the form...we need body-parse middleware before to access it..

// console.log("Ayesha");
// // we can run all the four methods get,post,put,delete on one url..in making full stack app, api mein ....we can write the post function here we make it separate
// })

// app.listen(PORT,()=>
// {
//     console.log(`Server is working on port no :${PORT}`);
// })
//for running we use node as express is work on node...
// -------------------------------------------------------------------------------
// ------Now we create an api-----------------------
// REST(Representational state Transfer) is an API that defines a set of
//  functions that programmers can use to send requests and 
//  recieve responses using the HTTP protocol methods such as GET and POST
// in API we send data in raw json file...json is an object form data...josn file mean dataa...we can do 4 methods on this data also
const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const router=require('./userRoutes');
const PORT=8000;

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/v1",router);
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname +"/express.html"));
});
// app.get("/api/v1/userData",(req,res)=>
// {
//     res.json({
//         "name":"Ayesha",
//         "email":"ayesha@gamil.com",
//         "password":"123456789",
//     })
// })

app.listen(PORT,()=>
{
    console.log(`Server is working on port no :${PORT}`);
})
// -------------------------------------------------------------------------------
