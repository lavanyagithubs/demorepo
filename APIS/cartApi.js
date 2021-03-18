//import express module
const exp = require("express");

const cartApiObj = exp.Router();
//import async error handler
const asyncErrHandler = require("express-async-handler");

//extract the body of req obj
cartApiObj .use(exp.json());

cartApiObj.post("/addtocart", asyncErrHandler(async(req,res,next)=>{
    //get user collection object
    let cartCollectionObject = req.app.get("cartCollectionObject");
    
    console.log("user object is",req.body);
    //let userObj =  JSON.parse(req.body.userObj)
    let userObj = req.body;
    console.log(userObj)
    //check for user in db
    let user = await cartCollectionObject.findOne({username:userObj.username,name:userObj.name});

    //if username alreaddy taken
    if(user!==null){
        res.send({message:"product existed"});
    }
    else{
        

        //create user
        let success = await cartCollectionObject.insertOne(userObj);
        res.send({message:"product added"});
    }
    //console.log("user obj is",req.body);
}))
cartApiObj.get("/viewcart/:username",asyncErrHandler(async (req,res,next)=>{
    //get user collectionobject
    let cartCollectionObject = req.app.get("cartCollectionObject");
    let username = req.body;
    
   let product=await cartCollectionObject.find({username:req.params.username}).toArray()
   res.send({message:product})
   //console.log(product)
  
}))

//export
module.exports = cartApiObj;
