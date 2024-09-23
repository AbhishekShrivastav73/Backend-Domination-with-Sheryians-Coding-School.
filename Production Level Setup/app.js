const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/index-router");
const mongooseconnection = require("./config/mongoose");
const config = require("config");

require("dotenv").config();

console.log(process.env.EXPRESS_KEY);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(config.get("PORT"));
