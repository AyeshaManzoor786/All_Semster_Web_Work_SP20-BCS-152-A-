// -------------------NODEEEE-----------------
//-------------Create Server methods-----------------
// const http=require('http'); //---we import it
// var PORT=2000;

// const server=http.createServer(function(req,res)
// {
// res.writeHead(200,{'Content-Type':'text/html'});
//  res.end("Hello World!!!!!");
// })

// console.log(`Server is start at ${PORT}!`)
// server.listen(PORT);


// -------2nd method to create a server----------
const http =require('http');
const fs=require('fs');
const PORT=4000;
const hostname="localhost";
const home=fs.readFileSync('./index2.html');
 const server=http.createServer((req,res)=>{
//create Server method take 3 paramerters .....1-> request  2-> response 3->arrow function-----and all these 3 parameters comes in arrow function
//   req.parmas--> jo request ki ha wo mily ga  
// res.url---> we get complete url of any website
// console.log(req.url);
// res.end("<h1>Hello World</h1>");

if(req.url==="/"){
 return   res.end(home);
}
if(req.url==="/about"){
  return  res.end("<h1>About Page</h1>");
}
if(req.url==="/service"){
  return  res.end("<h1>Service Page</h1>");
}
if(req.url==="/contact"){
  return  res.end("<h1>Contact Page</h1>");
}
if(req.url==="/blog"){
  return  res.end("<h1>Blog Page</h1>");
}

else{
  return  res.end("<h1>404 error--> page is not found</h1>");
}
    
 })
server.listen(PORT,hostname,()=>{
    console.log(`server is working on http:// ${hostname}: ${PORT} `);
})
// --------------------------------------------------
// const pokemon=require('pokemon');
// console.log(pokemon.random());
// console.log(pokemon.all());


//----------------------------------------------------
// const os=require('os');
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// ----------------------------------------------------

// const path=require('path');
// const a=path.extname('./TASK/index.js');
// console.log(a);

// const a=path.basename("c:/Users/Alee/Desktop/task/index.js");
// console.log(a);

// const a=path.dirname("c:/Users/Alee/Desktop/task/index.js");
// console.log(a);

// const b="/6b";
// const a=path.join("c:/Users/Alee/Desktop/task/index.js"+b);
// console.log(a);


//--------------------------------------------------------------
// const fs=require('fs');
 
// const a="Hello Ayesha";
// fs.writeFile('./sample1.txt',a,()=>{  //async function
//     console.log("Written successfully");
// })

// const b=fs.writeFileSync('./sample2.txt',a);
// console.log(b);


//  const a=fs.readFileSync('./sample.txt','utf-8'); //sync function
//  console.log(a);

// fs.readFileA('./sample.txt','utf-8',(err,data)=>{   //async function
//     if(err){
//         throw err;
//     }
//     else
//     {
//         console.log(data);
//     }
// });
//console.log("I am first");


// ----------------Raf work-----------
// we run the javascript at the backened through node....node is run time open source backend javascript environment which is ru on different platform
// link unx,linux,macOs,etc.it use V8 engine of the browser for backened coding...node.js is browser cross competible.
// -----package.json-> it keep track of all the packages we use in our current folder like in case TASK...it only track our data and pakages we use in it...and dependency of the packages also... 
// -----express->it is the framework of the node.It provide convenience for us to write code.in node if we write code  in 1000 libes but through express we write it in 200 lines.
//--node_modules folder is very necessary to use any module(pakages just like js library) of the npm in your project.
//--npm-> it is node package manger where alot of packages are present , we can use it in our project for convienence...
//--package-lock.json->main dependency ki mazeed dependencies...like express ki all dependencies are present in it.list of dependencies ki dependencies...
//--cosole.log(window)---> it work only for the frontend js becasue it is its component whearas it is not work in backened while we have same js file. so there is difference in frontend and backened jsin some components...
//---we make anything in js, it is consider as modules(any variable,function or object),we can transfer the modules through (---module.exports=a)
//--Types of Modules---->there are total 3 types of modules....
//1->file base module     2->Build in (we don't need to install it they are already present)   3->3rd Party(we need to install it like express,pokemon,mongoose)

// console.log("Hello World");
// const a=20;
// console.log(a/4);
// ----------------------------------
// const a={
//     average:(a,b)=>{
//      console.log((a+b)/2);
//     },
//     percentage:(a,b)=>{
//         console.log((a/b)*100);
//        },
// };
// module.exports=a;