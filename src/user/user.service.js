import userModel from "./user.model.js";
import pkg from "jsonwebtoken";
const {sign} = pkg;
class userService {
  static async createAccount(firstName, lastName, password, email) {
    await new userModel({
      email,
      password,
      firstName,
      lastName,
    }).save();
  }

  static async LoginToAccount(email, password) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error("email not found lol noob");
    }
    if (password != user.password) {
      throw new Error("password worng lol noob()");
    }
    const token = await this.signJwt({ _id: user._id , userName:user.lastName});
    return {
      user: { firstName: user.firstName, lastName: user.lastName },
      token,
    };
  }

  static async signJwt(userPayload) {
    return sign(userPayload, "my Secret Key");
  }
  static async findUserByEmail(email) {
    return userModel.findOne({ email });
  }

  static async findUserById(userId) {
    return userModel.findOne({ _id: userId });
  }

  static async getAll() {
    return userModel.find();
  }
  static async DeleteUser(userId) {
    return userModel.deleteOne({ _id: userId });
  }

  static async deleteMany(firstName) {
    return userModel.deleteMany({ firstName: firstName });
  }
  static async InfoType(InfoModifcationType, email, newInfo) {} //chaange info

  static async displayAllUsers() {}
}
// static async findUserFromToken(authHeader){}
export default userService;
