import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./src/user/user.route.js"
import connect from  "./src/config/database.js"

const app = express(); // creates a server//putting the express function(what it does) in the app variable / initializing it
const {json , urlencoded} = bodyParser; //initislizing the 2 variables jason and urlencoded with logic from bodyParser
app.use(urlencoded({extended: false}));
connect();
app.use(json());


// app.get("*",(req,res,next)=>{
//     console.log("get awal chi");
//     next();
// })

//   app.get("/user",(req,res)=>{
//      res.status(200).json({message:"to add user, type /user/signUp \n to modify user info type /user/ChangeInfo "});
//      });// if api has /user, this one will work with get,
    

app.use("/user",userRoutes);//it enters user.routes, and then it will enter to sign up

app.use("*",(req,res)=>{
    res.status(400).json({message:"programm zefet lol noob"});
   });
   // for catching all errors if port noe found


   

app.listen(3000,()=>{//accessing the port 3000 to specific server,
    console.log("listining to port 3000")
});

//each port is a location to a specific server, and that server does specific task
//ports a type of adress to a location in the server that does a specific task