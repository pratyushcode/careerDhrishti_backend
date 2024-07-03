const express=require("express");
const signupRoute=require("./src/routes/signup");
const loginRoute=require("./src/routes/login")
const bodyParser=require("body-parser");
const cors=require("cors")
const createAdminAccount=require("./src/scripts/admin");

const dbconnect=require("./src/configuration/dbConfig");
const Blogrouter = require("./src/routes/Blog");
const Resourcerouter = require("./src/routes/Resource");
const quizResultRoutes=require("./src/routes/QuizRouter")
const userRoutes = require("./src/routes/userRoutes")

dbconnect();
createAdminAccount();


const app=express();
const PORT=process.env.PORT||5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: '*', // Allow requests from this origin
  }));


app.use("/api/user",signupRoute);
app.use("/api/auth",loginRoute);
app.use("/api/blog",Blogrouter);
app.use("/api/resource",Resourcerouter);
app.use('/api/', quizResultRoutes);
app.use('/api/users', userRoutes);


app.listen(PORT,()=>
{
    console.log("Backend is Up")
})
