const express = require("express");
const app = express();
const path = require("path");
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/users");
const debuglog = require("debug")("development:app");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.status(500).send("Server Running");
});

app.get("/create",async function (req, res) {

    // This is an asynchronous code therefore we will use async/ await
  let createdUser = await  userModel.create({
    userName: 'Abhishek',
    name: 'Abhi',
    email: 'abhishek@gamil.com',
    password: 'pass',
  });

  debuglog('User Created');
  res.send(createdUser)
  
});

app.get('/read',async function(req,res){
   const user = await userModel.findOne({email : 'abhishek@gamil.com'})
   debuglog('readed')
   res.send(user)
})

app.put('/update',async function(req,res){
   const user = await userModel.findOneAndUpdate({email : 'abhishek@gamil.com'},{email : 'abhishek@gmail.com'},{new : true})
   debuglog('readed')
   res.send(user)
})

app.listen(3000);
