const express = require("express");
const app = express();
const { userModel, validator } = require("./models/userModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("server running");
});
app.post("/create", async function (req, res) {
  let { username, name, age, contact, email } = req.body;
  let error = validator({ username, name, age, contact, email });
  if (error) res.send(error.message);
  else res.send("everything worked");
});

app.listen(3000);
