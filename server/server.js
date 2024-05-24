require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//middlewares
//middleware for using json objects
app.use(express.json());

//router
app.use("/api/auth", authRoute);
app.use("/api/Form", contactRoute);
//useless
// app.get("/", function (req, res) {
//   res.status(200).send("welcome");
// });
// app.get("/register", function (req, res) {
//   res.status(200).send("YOOOOOO");
// });

//middleware for error handling which is to be written before connection only
app.use(errorMiddleware);

const PORT = 5000;

//connect to databse first and then start the servet=
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});

//hello
