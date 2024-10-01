const express = require("express");
const User = require("./models/userModel");
const app = express();
const upload = require("./multerSetup");
const sharp = require("sharp");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

// app.post("/upload", upload.single("image"), async (req, res) => {
//   let user = await User.create({
//     name: "Abhishek",
//     image: req.file.filename,
//   });
//   console.log(req.file);
//   res.send(user)
// });

app.post("/upload", upload.single("image"), async (req, res) => {
  let newBuffer = await sharp(req.file.buffer).resize(320, 240).toBuffer();
  let user = await User.create({
    name: "Memory Storage",
    image: newBuffer,
  });
  console.log(req.file);
  res.redirect("show");
});

app.get("/show", async (req, res) => {
  const files = await User.find({});
  res.render("show", { files });
});
app.listen(3000);
