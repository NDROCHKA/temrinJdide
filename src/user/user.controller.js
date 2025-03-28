import userService from "./user.service.js";

class userController {
  static async signUp(req, res) {
    try {
      const { firstName, lastName, password, email } = req.body;
      await userService.createAccount(firstName, lastName, password, email);
      res.status(200).json({ message: "User added successfully" });
    } catch (error) {
      console.error("Error during sign up:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async Login(req, res) {
    try {
      const { email, password } = req.body;
      if (password != undefined && email != undefined) {
        let user = await userService.LoginToAccount(email, password);
        res
          .status(200)
          .json({ user, message: "Logged in to existing user successfully" });
      } else {
        throw new Error(
          "Missing required fields or wrong email or wrong email"
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getOne(req, res) {
    try {
      const { userId } = req.body;
      const user = await userService.findUserById(userId);
      res.status(200).json({ message: "user added succsesfu;", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { userId } = req.body;
      const user = await userService.DeleteUser(userId);
      res.status(200).json({ message: "user deleted succsesfu;", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteMany(req, res) {
    try {
      const { firstName } = req.body;
      const user = await userService.deleteMany(firstName);
      res.status(200).json({message :"users deleted succ" , user})
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAllAccount(req, res) {
    try {
      const users = await userService.getAll();
      res.status(200).json({ message: users });
    } catch (error) {
      res.status(400).json({ message: "error lol noob", error });
    }
  }

  static async ChangeInfo(req, res) {
    try {
      const { InfoModifcationType, email, newInfo } = req.body;

      await userService.InfoType(InfoModifcationType, email, newInfo);
      res.status(200).json({ message: "Info Changed Succesfully" });
    } catch (error) {
      console.error("Error during changingInfo for user:", error);
      res
        .status(500)
        .json({ message: " wrong parameters or user email not found" });
    }
  }

  static async printAllUsers(req, res) {
    await userService.displayAllUsers();
    res.status(200).json({ message: " printed all the users" });
  }
}
export default userController;
