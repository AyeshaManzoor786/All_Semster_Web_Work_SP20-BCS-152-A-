const http =require('http');
const fs=require('fs');
const PORT=2000;
const hostname="localhost";
const home=fs.readFileSync('./index.html');
const Blog=fs.readFileSync('./Blog.html');
const Contact=fs.readFileSync('./Contact.html');
const Hyer_News_Hub=fs.readFileSync('./Hyer_News_Hub.html');
const our_story=fs.readFileSync('./our_story.html');
const diversity_inclusion=fs.readFileSync('./diversity_inclusion.html');
 const server=http.createServer((req,res)=>{
//create Server method take 3 paramerters .....1-> request  2-> response 3->arrow function-----and all these 3 parameters comes in arrow function
//   req.parmas--> jo request ki ha wo mily ga  
// res.url---> we get complete url of any website
// console.log(req.url);
// res.end("<h1>Hello World</h1>");

if(req.url==="/"){
 return   res.end(home);
}
if(req.url==="/news"){
  return  res.end(Hyer_News_Hub);
}
if(req.url==="/diversity"){
  return  res.end(diversity_inclusion);
}
if(req.url==="/story"){
  return  res.end(our_story);
}
if(req.url==="/contact"){
  return  res.end(Contact);
}
if(req.url==="/blog"){
  return  res.end(Blog);
}

else{
  return  res.end("<h1>404 error--> page is not found</h1>");
}
    
 })
server.listen(PORT,hostname,()=>{
    console.log(`server is working on http:// ${hostname}: ${PORT} `);
})