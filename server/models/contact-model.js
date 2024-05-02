const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  message: { type: String, require: true },
});

//create a model or collection
const Contact = new model("Constact", contactSchema);
module.exports = Contact;
