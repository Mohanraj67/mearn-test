import { client } from "./fs.js";
import bcrypt from "bcrypt";

export async function getmarksbyid(id) {
  return await client.db("lucas").collection("marks").findOne({ id: id });
}
export async function update(newmark) {
  return await client.db("lucas").collection("marks").insertMany(newmark);
}
export async function search(req) {
  return client.db("lucas").collection("marks").find(req.query).toArray();
}
export async function updatemarksByID(req) {
  return client.db("lucas").collection("marks").updateOne({id:id},{$set: updatebooks}).toArray();
}


 export async function genpassword(password){
  const salt=await bcrypt.genSalt(10);
  //console.log(salt);
  const haspassword=await bcrypt.hash(password,salt);
  //console.log(haspassword);
  return haspassword;
}
console.log(genpassword("password@123"));

export async function creatuser(username,haspassword){
    return await client.db("lucas").collection("user").insertOne({username: username,password: haspassword});
}

export async function getuserbyname(username){
  return await client.db("lucas").collection("user").findOne({username: username});
}
export async function getUserList() {
  return await client.db("lucas").collection("user").find().toArray();
}