const createAccount = async (firstname,lastname,password,email)=>{
console.log("i am in my service file");
console.log ("Data recived:\nfirstname:",firstname,"\nlastname:",lastname,"\npassword:",password,"\nemail",email     );
}
const InfoType = async (InfoModifcationType ,email , newInfo)=>{

    console.log(`info of ${InfoModifcationType} is being modified in the email ${email}`)
    console.log(`the new version is: ${newInfo}`)
}




export default {createAccount,InfoType};


