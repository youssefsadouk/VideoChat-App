import * as store from './state.js'
import * as ui from './ui.js'
import * as webRTCHandler from "./webRTCHandler.js";

let socketIO = null;
export const registerSocketEvents = (socket) => {
    socketIO = socket;

    socket.on("connect", () => {
      console.log("succesfully connected to socket.io server");
      store.setSocketId(socket.id);
      ui.updatePersonalKey(socket.id);
    });

    socket.on("connection-offer", (data)=>{
      webRTCHandler.handleConnectionOffer(data);
    })

  };

  export const sendConnectionOffer = (data) => {
    socketIO.emit("connection-offer", data);
  };
