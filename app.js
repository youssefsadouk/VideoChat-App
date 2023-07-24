const express = require("express");
const http = require("http");

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
})

let ConnectedUsers = [];

io.on("connection", (socket)=>{
    ConnectedUsers.push(socket.id);
    console.log(ConnectedUsers);

    socket.on("connection-offer", (data)=>{
        const {callType, calledPersonKey} = data;
        const calledSocketID = ConnectedUsers.find(userSocketID => {
            return userSocketID === calledPersonKey;
        })

        if (calledSocketID) {
            const data = {
                callerSocketID : socket.id,
                callType,
            };

            io.to(calledPersonKey).emit("connection-offer", data);
        }

    })
    socket.on("disconnect", ()=>{
        console.log("user disconnected");

        const newConnectedUsers = ConnectedUsers.filter((userId)=>{
            return userId !== socket.id;
        })

        ConnectedUsers = newConnectedUsers;
        console.log(ConnectedUsers);
    })

})

server.listen(PORT, ()=>{
    console.log("Server is listenning on port " + PORT);
})