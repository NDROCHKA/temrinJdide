let arrayAccounts = [];
// let counter = 0;
let found = 0;

const createAccount = async (firstname,lastname,password,email)=>{
console.log("i am in my service file");
console.log ("Data recived:\nfirstname:",firstname,"\nlastname:"
            ,lastname,"\npassword:",password,"\nemail",email);
        }


const InfoType = async (InfoModifcationType ,eemail , newInfo)=>{
    
    for (let i = 0; i < arrayAccounts.length; i++) {
        if (arrayAccounts[i][3] == eemail) {
          found = true;
          switch (InfoModifcationType) {
            case 'firstName':
              arrayAccounts[i][0] = newInfo;
              break;
            case 'lastName':
              arrayAccounts[i][1] = newInfo;
              break;
            case 'password':
              arrayAccounts[i][2] = newInfo;
              break;
            default:
              throw new Error("Invalid InfoModifcationType provided");
          }
          // Once updated, exit the loop
          break;
        }
      }
      if (!found) {
        throw new Error("User email not found");
      }
    };
const displayAllUsers = async() =>{
    console.log("\n\n\nUser List:");
    for (let i = 0; i < arrayAccounts.length; i++) {
      console.log(`User ${i}:`);
      console.log(`First Name: ${arrayAccounts[i][0]}`);
      console.log(`Last Name: ${arrayAccounts[i][1]}`);
      console.log(`Password: ${arrayAccounts[i][2]}`);
      console.log(`Email: ${arrayAccounts[i][3]}`);
      console.log("----------------------");
      
    }
}
export default {createAccount,InfoType,displayAllUsers,arrayAccounts};


