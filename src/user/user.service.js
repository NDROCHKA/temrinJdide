let arrayAccounts = [];
let counter = 0;
let found = 0;

const createAccount = async (firstname,lastname,password,email)=>{
console.log("i am in my service file");
console.log ("Data recived:\nfirstname:",firstname,"\nlastname:"
            ,lastname,"\npassword:",password,"\nemail",email);
}
const InfoType = async (InfoModifcationType ,email , newInfo)=>{

    while(counter < arrayAccounts.length){
        // Check if the current account's email (4th element) matches the user input email
        if (arrayAccounts[counter][3] == email) {
            found++
          switch (InfoModifcationType){
         case 'firstName':
            arrayAccounts[counter][0] = newInfo;
            break;
         case 'lastName':
            arrayAccounts[counter][1] = newInfo;
            break;
         case'password':
            arrayAccounts[counter][2] = newInfo;
            break;
        }
          } 
          counter++;
        }
        if (counter == arrayAccounts.length && found == 0 ){throw new Error("user email not found");}
    
    console.log(`info of ${InfoModifcationType} is being modified in the email ${email}`)
    console.log ("NEW INFO:\nfirstname:",arrayAccounts[counter][0],"\nlastname:",arrayAccounts[counter][1]
                ,"\npassword:",arrayAccounts[counter][2],"\nemail",arrayAccounts[counter][3]);
}




export default {createAccount,InfoType,arrayAccounts};


