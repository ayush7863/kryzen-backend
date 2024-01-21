const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  photo: String,
  number:Number
});

const FormModel = mongoose.model("form", formSchema);

module.exports = {
  FormModel,
};
