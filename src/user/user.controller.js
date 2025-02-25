import userService from "./user.service.js";

const signUp = async (req, res) => {
  try {
    const { firstname, lastname, password, email } = req.body;
    if(firstname != undefined && lastname != undefined && password !=undefined && email!=undefined){
    await userService.createAccount(firstname, lastname, password, email);
    userService.arrayAccounts.push([firstname,lastname,password,email]);
    res.status(200).json({ message: "User added successfully" });}
    else { throw new Error("Missing required fields");}
  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const ChangeInfo = async(req,res) =>{
    try{
    const {InfoModifcationType , email , newInfo} = req.body;   

    await userService.InfoType(InfoModifcationType , email , newInfo) 
    res.status(200).json({message: "Info Changed Succesfully"})
    }
    catch(error){
        console.error("Error during changingInfo for user:", error);
        res.status(500).json({ message: " wrong parameters or user email not found" });
    }
}

export default{signUp, ChangeInfo}


