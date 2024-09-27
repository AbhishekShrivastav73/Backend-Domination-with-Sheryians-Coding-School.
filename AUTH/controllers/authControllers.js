const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const generateToken = require("../utilis/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    const { name, email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    let salt = await bcrypt.genSalt();
    let hashedPassword = await bcrypt.hash(password, salt);

    user = await userModel.create({ email, password: hashedPassword, name });
    let token = generateToken({ email });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 30 * 24 * 60 * 60,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.loginUser = async function (req, res) {
  let { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    let result = await bcrypt.compare(password, user.password);
    if (result) {
      let token = generateToken({ email });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 30 * 24 * 60 * 60,
      });

      res.status(201).send(user);
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.logoutUser = function (req, res) {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
  });

  res.status(201).send("Logged out!");
};
module.exports.getUserProfile = function (req, res) {
    res.status(201).send(req.user);
};
