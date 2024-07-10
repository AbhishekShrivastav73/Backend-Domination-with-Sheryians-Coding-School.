const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    res.render("index", { files });
  });
});

app.get("/edit/:filename", function (req, res) {
  const fileName = req.params.filename;
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err,data) {
    if(err) res.send(err);
    else res.render("edit",{fileName,data});

    
  });
}); 
app.get("/delete/:filename", function (req, res) {
  const fileName = req.params.filename;
  fs.unlink(`./files/${req.params.filename}`, function (err) {
    if(err) res.send(err);
    else res.redirect('/');

    
  });
}); 

app.post("/update/:filename", function (req, res) {
  fs.writeFile(`./files/${req.params.filename}`,req.body.fileData ,function(err){
    fs.rename(`./files/${req.params.filename}`,`./files/${req.body.newFileName}`,function(err){
      if(err) console.log(err);
      else console.log('File renamed');
    })
    if(err) res.send(err);
    else res.redirect('/')
  })

}); 

app.get("/create", function (req, res) {
  res.render("create");
});



app.post("/createHisab", function (req, res) {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  let data = req.body.hisaab;

  fs.writeFile(`./files/${formattedDate}.txt`, data, function (err) {
    if (err) console.log(err);
    else console.log("File Created");
    res.redirect("/");
  });
});
app.listen(3000);
