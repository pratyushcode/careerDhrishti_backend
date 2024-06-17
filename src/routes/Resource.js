const express=require("express");
const {GetResource,addResource}=require("../controllers/Resource");


const Resourcerouter=express.Router();

Resourcerouter.get("/",GetResource);
Resourcerouter.post("/add",addResource);

module.exports=Resourcerouter;