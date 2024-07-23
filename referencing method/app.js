const express = require("express");
const app = express();
let userModel = require('./models/userModel')
let postModel = require('./models/postModel')

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/", function (req, res) {
  res.send("hey there");
});
app.post("/create",async function (req, res) {
  let createdUser = await userModel.create({
    username : req.body.username,
    email : req.body.email
  }) 

  res.send(createdUser)
});
app.post("/:username/create/post",async function (req, res) {
  let user = await userModel.findOne({username : req.params.username});

  let createdPost = await postModel.create({
    user : user._id,
    content : req.body.content
  })
  user.posts.push(createdPost._id)
  await user.save()
  res.send(user)
});

app.get('/users',async function(req,res){
  let user = await userModel.find().populate('posts')
  res.send(user)
});

app.listen(3000);
