import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./src/user/user.route.js"

const app = express(); // creates a server//putting the express function(what it does) in the app variable / initializing it
const {json , urlencoded} = bodyParser; //initislizing the 2 variables jason and urlencoded with logic from bodyParser
app.use(urlencoded({extended: false}));

app.use(json());


// app.get("*",(req,res,next)=>{
//     console.log("get awal chi");
//     next();
// })

  app.get("/user",(req,res)=>{
     res.status(200).json({message:"to add user, type /user/signUp \n to modify user info type /user/ChangeInfo "});
     });// if api has /user, this one will work with get,
    

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

//app.use: where to send info on the server(it can be .get .post ...) .use sends to everything, these are called methods
//app.listin: creates a server on a specific post
//res.status: (response)finishes the requests, and returns a final message if needed. its like retrun 0;
// i can write whatever i want to do in the app.use , but then either i want to type next(), or res.status()
// next(): finishes the request and switchen to the next request.
//middleware: is the file that is being opened. ex ./user/userroute.js . userRoutes is middleware.
// if we have /user and inside it we have /signUp , ./user/sighUp doesnt have /signUp.
//anonimos functions:
//path:  ://user/sighup/7araket

//request.method: lets us get the method(get , post ect...)
