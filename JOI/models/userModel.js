const joi = require("joi");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/joitestdb");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 4,
  },
  name: {
    type: String,
    required: true,
    minLength: 4,
  },
  age: {
    type: Number,
    min: 18,
    required: true,
  },
  contact: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
});

function validator(data) {
  let schema = joi.object({
    username: joi.string().min(4).required(),
    name: joi.string().min(4).required(),
    age: joi.number().min(18).required(),
    contact: joi.number(),
    email: joi.string().email().required(),
  });

  let {error} = schema.validate(data)
  // console.log(res.error?.message);
  return error;
}
const userModel =  mongoose.model("user", userSchema)

module.exports = {validator , userModel} ;
