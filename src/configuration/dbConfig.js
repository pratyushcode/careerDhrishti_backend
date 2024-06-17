const mongoose = require('mongoose');

const dbconnect=async ()=>
{
    try {
        await mongoose.connect("mongodb+srv://pratyush:pratyush123@cluster0.bn3csf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("dp is up");
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbconnect;