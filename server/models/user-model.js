const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//secure the password using bcrypt
//pre method is run before the createuser method in the program acts as a middleware
userSchema.pre("save", async function (next) {
  //console.log("Pre method", this);
  const user = this;

  if (!user.isModified("password")) {
    next();
  }
  try {
    //giving saltRounds
    //const saltRound = 10;
    //or more professional method to give saltrounds
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

//compare the password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//json web token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        //this is payload
        userId: this._id.toString(),
        email: this.emai,
        isAdmin: this.isAdmin,
      },
      //signature saved in .env file
      process.env.JWT_SECRET_KEY,
      //token Expires in 30 days
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.error(error);
  }
};

//define the model or the collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;
