const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

module.exports.protect = async function (req, res, next) {
  if (req.cookies.token) {
    try {
      const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
      let user = await userModel.findOne({ email: data.email }).select('-password');
      req.user = user;
      next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
  }else{
    res.status(401).json({ message: "Invalid token" });
  }
};
