// const expres= require("express");
// const {server}= require("http");
// const { MongoClient } = require('mongodb');
import express, { json } from "express";
import { MongoClient } from "mongodb";
import bcrypt, { hash } from "bcrypt";
import { markrouter } from "./routes/marks.js";
import{userRouter} from "./routes/user.js";
import dotenv from "dotenv"
 dotenv.config();
const app= express();
const PORT=process.env.PORT;



 const MONGO_URL=process.env.MONGO_URL;
  
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is Connected");
  return client;
}
 export const client = await createConnection(); 

 app.use(express.json());
  
    // let filtermarks=marks;
    // if(physics){
    //     filtermarks=filtermarks.filter((mk)=>mk.physics===+physics);
    // }
    // if(chemistry){
    //     filtermarks=filtermarks.filter((mk)=>mk.chemistry===+chemistry);
    // }
    // if(maths){
    //     filtermarks=filtermarks.filter((mk)=>mk.maths===+maths);
    // }
    // if(gender){
    //     filtermarks=filtermarks.filter((mk)=>mk.gender===gender);
    // }
    // res.send(filtermarks);

    
app.get("/", (req, res) => {
  res.send("hi da mohanraj");
});

// app.get("/marks/:id",async(req,res)=>{
//     const {id}=req.params;
//         console.log(id);
//         const mark=await client.db("lucas").collection("marks").findOne({id:id});
//         mark? res.send(mark):res.send({message:"no books there"});
// //hi da

//})
 
app.use("/marks",markrouter);
app.use('/user',userRouter);
app.listen(PORT,()=> console.log("server is started",PORT)
);

