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
  {
    console.log("a user connected");
    // ToDo: pass the connected username
    const username = "(ToDo: Replace with username)";
    socket.broadcast.emit("send_message", {
      user: username,
      text: `${username} has connected from chat`,
      type: "notification",
    });
  }

  socket.on("disconnect", () => {
    console.log("a user disconnected");
    // ToDo: pass the disconnected username
    const username = "(ToDo: Replace with username)";
    socket.broadcast.emit("send_message", {
      user: username,
      text: `${username} has disconnected from chat`,
      type: "notification",
    });
  });

  socket.on("send_message", (msgObj) => {
    console.log("Server recieved from client: ", msgObj.text);
    socket.broadcast.emit("send_message", msgObj);
  });


});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
