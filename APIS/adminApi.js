//import express module
const exp = require("express");

const adminApiObj = exp.Router();
//import async error handler
const asyncErrHandler = require("express-async-handler");
//import cloudinary
const cloudinary = require("cloudinary").v2;

//import multer-storage-cloudinary
const {CloudinaryStorage} = require("multer-storage-cloudinary");

//import multer
const multer = require("multer");

//configure cloudinary
cloudinary.config({ 
    cloud_name: 'db4d77l5r', 
    api_key: '615372751886964', 
    api_secret: 'DSvT5hPnwmL6rogCT1SvVMvblrw' 
  });

//configure cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ecom',
        format: async (req, file) => 'png', // supports promises as well
        public_id: (req, file) => file.fieldname + '-' + Date.now()
    },
});

//congigure multer
var upload = multer({ storage: storage });



//extract the body of req obj
adminApiObj.use(exp.json());
//get req handler
adminApiObj.post("/addpro", upload.single('photo'), asyncErrHandler(async(req,res,next)=>{
    //get user collection object
    let adminCollectionObject = req.app.get("adminCollectionObject");
    
    
    let userObj =  JSON.parse(req.body.userObj)
    //let userObj = req.body;
    console.log(req.body.userObj)
    //check for user in db
    let user = await adminCollectionObject.findOne({name:userObj.name});

    //if username alreaddy taken
    if(user!==null){
        res.send({message:"product existed"});
    }
    else{
        

         //add userImagelink
         userObj.userImgLink = req.file.path;

        //create user
        let success = await adminCollectionObject.insertOne(userObj);
        res.send({message:"product added"});
    }


}))
//get pro
adminApiObj.get("/getpro", asyncErrHandler(async(req,res,next)=>{
    //get user collection object
    let adminCollectionObject = req.app.get("adminCollectionObject");
    let userObj=await adminCollectionObject.find().toArray()
    res.send({message:userObj})
    //console.log(userObj)
    
}))
adminApiObj.get("/getproduct", asyncErrHandler(async(req,res,next)=>{
    //get user collection object
    let adminCollectionObject = req.app.get("adminCollectionObject");
    let userObj=await adminCollectionObject.find().toArray()
    res.send({message:userObj})
    //console.log(userObj)
    
}))
adminApiObj.get("/getproduct/:name",asyncErrHandler(async (req,res,next)=>{
    //get user collectionobject
    let adminCollectionObject = req.app.get("adminCollectionObject");
    
   let product=await adminCollectionObject.findOne({name:req.params.name})
   res.send({message:product})
   //console.log(product)
  
}))
//export
module.exports = adminApiObj;