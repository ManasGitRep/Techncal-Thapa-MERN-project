//middleware for validating schema in the auth-validator.js file for the fields entered in the input areas in the login or registration form
const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "fill the input properly";
    const extraDetails = err.errors[0].message;
    const error = {
      status,
      message,
      extraDetails,
    };
    console.log(error);
    //error handling
    //res.status(400).json({ message: message });
    //error handling using middleware
    next(error);
  }
};

module.exports = validate;
