const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(__dirname+'/public'))
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("server is listning on port 3000");
});
