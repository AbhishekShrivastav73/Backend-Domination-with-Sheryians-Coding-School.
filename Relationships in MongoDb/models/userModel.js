const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/relationship");
const postSchema = mongoose.Schema({
  content: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  password: String,
  posts: [postSchema],
}); 

module.exports = mongoose.model("user", userSchema);
