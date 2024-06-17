const express=require("express");
const {GetBlog}=require("../controllers/Blog");


const Blogrouter=express.Router();

Blogrouter.get("/",GetBlog);

module.exports=Blogrouter