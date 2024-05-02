const express = require("express");
const router = express.Router();
// const { home, registration } = require("../controllers/auth-controller.js");
const authcontrollers = require("../controllers/auth-controller.js");
//validate middleware for validating the entries done by the user
const validate = require("../middlewares/validate-middleware.js");
const loginvalidate = require("../middlewares/validate-middleware-login.js");
const signupSchema = require("../validators/auth-validator.js");
const loginSchema = require("../validators/login-validator.js");

//first router using controller
router.route("/").get(authcontrollers.home);

//second router using controller
router
  .route("/register")
  //before registration route validate middleware will run
  .post(validate(signupSchema), authcontrollers.registration);

router.route("/login").post(loginvalidate(loginSchema), authcontrollers.login);

module.exports = router;
