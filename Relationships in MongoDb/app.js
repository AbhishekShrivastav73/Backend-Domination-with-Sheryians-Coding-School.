const express = require("express");
const app = express();
const userModel = require("./models/userModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("server running");
});
app.post("/create", async function (req, res) {
  let { username, name, password } = req.body;
  let createdUser = await userModel.create({
    username,
    name,
    password,
  });

  res.send(createdUser);
});

app.post("/:username/create/post", async function (req, res) {
  let user = await userModel.findOne({ username: req.params.username });
  //push krne se database me save nahi hota hai apne ap isslye alg se save command dena padega
  user.posts.push({
    content : req.body.content
  })
  // user me save kiya aur ye async code hai isslye isko await kiya
  await user.save()
  res.send(user)
});

app.listen(3000);
