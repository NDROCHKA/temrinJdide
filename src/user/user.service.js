import userModel from "./user.model.js";
class userService {
  static async createAccount(firstName, lastName, password, email) {
    await new userModel({
      email,
      password,
      firstName,
      lastName,
    }).save();
  }

  static async LoginToAccount(email, password) {}

  static async InfoType(InfoModifcationType, email, newInfo) {}//chaange info

  static async displayAllUsers() {}
}
export default userService;
