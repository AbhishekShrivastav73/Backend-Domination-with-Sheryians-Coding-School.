const express = require("express");
const app = express();
const path = require("path");
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/user");
const cors = require("cors");

app.use(cors());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/createuser", function (req, res) {
  res.render("createUser");
});
app.get("/dashboard", function (req, res) {
  res.render("dashboard");
});
app.get("/edit/:name", async function (req, res) {
  let user = await userModel.findOne({ firstName: req.params.name });
  res.render("editUser",{user});
});

app.post("/create", async function (req, res) {
  const { firstName, lastName, email, phone, jobTitle, role, password } =
    req.body;

  let createdUsers = await userModel.create({
    firstName,
    lastName,
    email,
    phone,
    jobTitle,
    role,
    password,
  });

  res.redirect("/users");
});

app.get("/users", async function (req, res) {
  const allUsers = await userModel.find();
  res.render("allusers", { allUsers });
});
app.get("/user/:user", async function (req, res) {
  const users = await userModel.findOne({ UserName: req.params.user });
  res.send(users);
});

app.get("/update/:user", async function (req, res) {
    const { firstName, lastName, email, phone, jobTitle, role, password } =
    req.query;

  let updatedUser = await userModel.findOneAndUpdate(
    { firstName: req.params.user },
    { firstName, lastName, email, phone, jobTitle, role, password },
    { new: true }
  );
  res.redirect('/users');
});

app.get("/delete/:name", async function (req, res) {
  console.log(req.params.name);
  const deletedUser = await userModel.findOneAndDelete({
    firstName: req.params.name,
  });
  res.redirect("/users");
});

app.listen(3000);
