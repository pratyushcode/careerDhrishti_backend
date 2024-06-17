const Resource=require("../models/Resource");


async function GetResource(req,res)
{
    let resource;
    try { 
        resource =await Resource.find()
    } catch (error) {
        console.log(resource);
    }

    return res.json({resource});

}

const addResource=async(req,res,next)=>
    {
        const{ImageHref,category, title,desc,buttonHref}=req.body;
    
        const newResource= new Resource({ImageHref,
            category,
            title,
            desc,
            buttonHref});
    
          try {
            await newResource.save()
          } catch (error) {
            console.log(error);        
          }
    
        res.json({newResource});
        
    
    
    }

    // ImageHref: {
    //     type: String,
    //     required: true
    //   },
    //   category: {
    //     type: String,
    //     required: true
    //   },
    //   title: {
    //     type: String,
    //     required: true
    //   },
    //   desc: {
    //     type: String,
    //     required: true
    //   },
     
    //   buttonHref: {
    //     type: String,
    //     required: true
    //   }
      

module.exports={
    GetResource,
    addResource
}