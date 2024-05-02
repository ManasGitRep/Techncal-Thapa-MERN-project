const { error } = require("console");
const User = require("../models/user-model");
//const bcrypt = require("bcryptjs");
//logic for home
const home = async (req, res) => {
  try {
    res.status(200).send("hiiiii");
  } catch (error) {
    console.log("error in controller", error);
  }
};

//logic for registration page
const registration = async (req, res) => {
  try {
    //to print body on terminal
    console.log(req.body);

    //*Key registration features/steps*
    //1. get registration data retrieve user data(username,pass,email)
    //2. check email existance
    //3. hash password, securly hash the password
    //4. create user, create a new user with hashed password
    //5. save to DB, save user data to the database
    //6. respond, respond with registration successful or handle errors

    const { username, email, password, phone } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }
    //hash the password in server but hashing is done in the model schema
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      phone,
      email,
      //password: hash_password,
      password,
    });

    //const data = req.body;
    res.status(200).json({
      //to show to details of the user pass userCreated in message
      //message: userCreated,
      //to hide the users info only send msg as Registration successful
      message: "Registration successful",
      //json web token using instance method
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//logic for login page
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const user /*ispasswordValid*/ = await bcrypt.comapre(
    //   password,
    //   userExist.password
    // );
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login Succesfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "invalid email or password" });
      console.log(error);
    }
  } catch (error) {
    res.status(500).json("internal error");
  }
};

module.exports = { home, registration, login };
