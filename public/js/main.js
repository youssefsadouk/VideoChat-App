const socket = io("/");

socket.on("connect", ()=>{
    console.log("succefully connected to wss server from client side");
    console.log(socket.id);
})