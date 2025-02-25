import userService from "./user.service.js";

const signUp = async (req, res) => {
  try {
    const { firstname, lastname, password, email } = req.body;
    await userService.createAccount(firstname, lastname, password, email);
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default{signUp}


