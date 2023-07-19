import * as store from "./state.js";


const socket = io("/");

socket.on("connect", ()=>{
    console.log("succefully connected to wss server from client side");
    store.setSocketId(socket.id);
})