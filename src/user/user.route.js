import express from "express";
import userController from "./user.controller.js";
const router = express.Router();

// router.post("/signUp",(req,res)=>{
// console.log("ana bi userRoutes")

// res.status(200).json({message:"ana bi userRoutes"});
// });

// router.use("*",(req,res,next)=>{
//     console.log("my request is", req)
//     console.log("my method is", req.method)
//     console.log("my base URL is", req.baseUrl)
//     console.log("my original URL is", req.originalUrl)
//     console.log("my body in PostMan is", req.body)
//     // HERE WE GET INFO FROM THE REQUEST AS req.whatever we want to get the info of 
//     next();
// });
//we have now router.use with * . this lets us get all the elements  that are only in /user 

router.use("/signUp",userController.signUp);
router.use("/ChangeInfo",userController.ChangeInfo);
// router.use("/ChangeInfo/'firstname'}",userController.firstNameMod);
// router.use("/ChangeInfo/'Lastname'}",userController.LastNameMod);
// router.use("/ChangeInfo/'Email'}",userController.EmailMod);



export default router;

