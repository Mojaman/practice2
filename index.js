const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));

// このスペースにコードを書いていく

const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
});
