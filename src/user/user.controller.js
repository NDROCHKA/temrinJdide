import userService from "./user.service.js";

const arrayAccounts = [];

const signUp = async (req, res) => {
  try {
    const { firstname, lastname, password, email } = req.body;
    if(firstname != undefined && lastname != undefined && password !=undefined && email!=undefined){
    await userService.createAccount(firstname, lastname, password, email);
    arrayAccounts.push([firstname,lastname,password,email]);
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
    for (let i = 0; i < arrayAccounts.length; i++) {
        // Check if the current account's email (4th element) matches the user input email
        if (arrayAccounts[i][3] == email) {
          switch (InfoModifcationType){
         case 'firstName':
            arrayAccounts[i][0] = newInfo;
            break;
         case 'lastName':
            arrayAccounts[i][1] = newInfo;
            break;
         case'password':
            arrayAccounts[i][2] = newInfo;
            break;
        }
          } else {
            throw new Error("Missing required fields");
          }
          // If you expect only one account per email, you can break out of the loop
          break;
        }
    await userService.InfoType(InfoModifcationType , email , newInfo) 
    res.status(200).json({message: "Info Changed Succesfully"})
    }
    catch(error){
        console.error("Error during changingInfo for user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default{signUp, ChangeInfo}


