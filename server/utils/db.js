const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

//simple connection
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

//alternative connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DataBase :)");
  } catch (error) {
    console.log(error);
    console.error("database not connected");
    process.exit(0);
  }
};

module.exports = connectDB;
