const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
//status code Information
//(100-199)->informational 
//(200-299)->successful
//(300-399)->redirect
//(400-499)->client error
// (500-599)->server error
// 200-ok
// 201-created

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
const PORT=3000;
const HOSTNAME="localhost";

//connect to mongoDB 
mongoose.connect("mongodb://localhost:27017/Sample1").then(()=>{
    console.log("Connected to the mongoDB successfully");
}).catch((err)=>{
  console.log(err);
})
//schema
const product=new mongoose.Schema({
    name:String,
    description:String,
    price:Number
})
//model 
const Product=new mongoose.model("Products",product)

//api--post(create Product)
app.post("/api/v1/product/new", async(req,res)=>{
    
 const prod=await Product.create(req.body);
 res.status(201).json({
    success: true,
    prod
 });
})

//api--get(read Product)
app.get("/api/v1/products",async(req,res)=>{
    const prod=await Product.find();
    res.status(200).json({
       success: true,
       prod
    });
})

//api--put(update Product)
app.put("/api/v1/product/:id",async(req,res)=>{
    let prod=await Product.findById(req.params.id);
    if(!prod){
        return res.status(500).json({
            success:false,
            message:"Product is not fount"
        })
    }
     prod=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        useFindAndModify:false,
        runValidators:true
    })
     res.status(200).json({ 
        success:true,
        prod
    })

})
//api--delete(delete Product)
app.delete("/api/v1/product/:id",async(req,res)=>{
    const prod=await Product.findById(req.params.id);
    if(!prod){
        return res.status(500).json({
            success:false,
            message:"Product is not found"
        })
    }
   await prod.remove();

   res.status(200).json({
    success:true,
    message:"Product is deleted is successfully"
    })
})


app.listen(PORT,HOSTNAME,()=>{
  console.log(`Server is start at http:${HOSTNAME} :${PORT}`);
})

// app.listen(3000,()=>{
//     console.log("Server is start");
// })