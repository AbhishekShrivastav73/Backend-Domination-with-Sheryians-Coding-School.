const express = require("express");
const app = express();
const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer(app);
const io = socketIO(server);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", function (socket) {
  console.log(socket.id);
  socket.join('room1')
  socket.on("disconnect", function () {
    console.log("User disconnected");
  });
  socket.on("abcd", function (msg) {
    console.log(msg);
    // io.emit("defg", "abhishek"); // bheja
    socket.emit("defg", "abhishek");

  });
  socket.on('typing', function(){
    socket.broadcast.emit('typing', {user: socket.id});
  })
});

app.get("/", function (req, res) {
  res.render("index");
});

server.listen(3000);
