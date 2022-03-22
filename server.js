const express = require("express");
const app = express();
const path = require("path");
const http = require("http").createServer(app);

app.use(express.static(__dirname + "/public"));
// app.use(express.static( __dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// SOCKET
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("connected...");
  socket.on("message", (msg) => {
    console.log(msg);
    socket.broadcast.emit("message", msg);
  });
});

http.listen(3000, () => {
  console.log("server is listning on port 3000");
});
