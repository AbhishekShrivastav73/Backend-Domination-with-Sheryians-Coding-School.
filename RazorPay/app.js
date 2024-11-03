const express = require("express");
const app = express();
const indexRoutes = require("./routes/indexRoutes");
require("dotenv").config();
const mongooseConnection = require("./config/mongoose");

app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/", indexRoutes);

app.listen(3000);
