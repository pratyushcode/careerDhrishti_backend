const express=require("express");
const signupRoute=require("./src/routes/signup");
const loginRoute=require("./src/routes/login")
const bodyParser=require("body-parser");
const cors=require("cors")
const createAdminAccount=require("./src/scripts/admin");

const dbconnect=require("./src/configuration/dbConfig");
const Blogrouter = require("./src/routes/Blog");
const Resourcerouter = require("./src/routes/Resource");


dbconnect();
createAdminAccount();


const app=express();
const PORT=process.env.PORT||5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://career-dhrishti-frontend.vercel.app/', // Allow requests from this origin
  }));


app.use("/api/user",signupRoute);
app.use("/api/auth",loginRoute);
app.use("/api/blog",Blogrouter);
app.use("/api/resource",Resourcerouter);



app.listen(PORT,()=>
{
    console.log("Backend is Up")
})
