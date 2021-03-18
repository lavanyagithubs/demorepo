//import expressmodule
const exp = require("express");
const app = exp();

//import path module
const path = require("path");

//import mongodb module
const mc = require("mongodb").MongoClient;
//import ditenv module
require("dotenv").config();

//import api objects
const userApiObj = require("./APIS/userApi");
const cartApiObj = require("./APIs/cartApi");
const adminApiObj = require("./APIS/adminApi");

//import express-async-handler
//const asyncErrHandler = require("express-async-handler");

//forward
app.use("/user",userApiObj);
app.use("/cart",cartApiObj)
app.use("/admin",adminApiObj);

app.use(exp.static(path.join(__dirname,"./dist/e-commerce")));


//db url
const dburl=process.env.dburl

//db connectivity
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client=>{

    //get database object
    const databaseObject = client.db("ecommerce");
    const userCollectionObject = databaseObject.collection("usercollection");
    const cartCollectionObject = databaseObject.collection("cartcollection");
    const adminCollectionObject = databaseObject.collection("admincollection");

    //sharing collection object
    app.set("userCollectionObject",userCollectionObject);
    app.set("adminCollectionObject",adminCollectionObject);
    app.set("cartCollectionObject",cartCollectionObject)
    console.log("Connected to database server...");
})
.catch(err=>console.log("err in db connection",err));

//middleware to handle invalid path
app.use((req,res,next)=>{
    res.send({message:`${req.url} is invalid path`});
})


//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"Some error occurred",reason:err.message})
})

//assign port number
const port = process.env.port||8000;
app.listen(port, () => {console.log(`Web server is listening on port ${port}..`)});