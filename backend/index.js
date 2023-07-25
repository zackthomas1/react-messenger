const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
  const fileName = "index.html";
  const relPublicDir = "public";
  const absProjectDir = path.join(__dirname, "..", "..");
  const directory = path.join(absProjectDir, relPublicDir, 'build', fileName);

  console.log(__dirname);
  console.log(directory);

  res.sendFile(directory);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
