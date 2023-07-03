const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer();

server.listen(PORT, ()=>{
    console.log("Server is listenning on port" + PORT);
})