const Blog=require("../models/Blog");


async function GetBlog(req,res)
{
    let blog;
    try { 
        blog =await Blog.find()
    } catch (error) {
        console.log(blog);
    }

    return res.json({blog});

}




module.exports={
    GetBlog
}