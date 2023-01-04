// ------------------Mongo DB-----------------------------------
//In mongo db, it has json like object but not json...its format on BSON(binary json).
// collection(like table)--> collection of document(it is complete one object)
// we get Id of every object
// mongoose is the mongo db object modeling tool designed to work in an asynchronous environment.
// mongoose support both promises and callback. It is a mongoDB library to connect the Node.js
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Sample")
  .then(() => {
    console.log("Connect to mongo DB successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//in this , we already need to define models and scheme
// In Schema-> we define how many fields we are require and their data type
// In Model-> Model is just like collection->mean table
//Schema:
const student = new mongoose.Schema({
  name: String,
  height: Number,
  workout: Boolean,
});
//model
const Student = new mongoose.model("Student", student);

// create database
const ss = new Student({
  name: "Aysha",
  heigth: 5,
  workout: true,
});

// await ss.save();//promise yah tou fulfilled ho ga yah reject
// we call it in a function

const adder = async () => {
  // const ss=new Student({
  //     name:"Aysha",
  //     height:5,
  //     workout:true
  // })

  await ss.save();
  // |above method is not good for written data that's why we use another method
  // create method
  // const ss= await Student.create({
  //     name:"Ansa",
  //         height:4,
  //         workout:true
  // })
  // console.log(ss);

  //in Mongo DB compas change the Model name as Model Name=Student -->students(last pr s aur capital ko short)
  //find
  // const ss= await Student.find();
  // console.log(ss);

  // find the height using operator --> for operator we add $ signs before it
  // const ss= await Student.find({height:{$eq:5}});
  // console.log(ss);

  // const ss= await Student.find({height:{$in:[5,4]}});//wo wali jin ki height 4 and 5 ha
  // console.log(ss);

  const ss = await Student.find({ height: { $nin: [5, 4] } }); //wo wali jin ki height 4 and 5 nhi ha
  console.log(ss);
};

adder();
