// imports
const express = require("express");
const path = require("path");

//
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// React app director
const fileName = "index.html";
const directory = path.join(path.join(__dirname, ".."), "/frontend/build");

// middleware
// Serve the built React files
app.use(express.static(directory));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(directory, fileName));
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });

  socket.on("send_message", (msg) => {
    console.log("Server recieved from client: ", msg);
    socket.broadcast.emit("send_message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
