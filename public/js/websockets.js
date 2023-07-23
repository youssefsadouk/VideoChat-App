import * as store from './state.js'
import * as ui from './ui.js'


let socketIO = null;
export const registerSocketEvents = (socket) => {
  
    socket.on("connect", () => {

      socketIO = socket;
      console.log("succesfully connected to socket.io server");
      store.setSocketId(socket.id);
      ui.updatePersonalKey(socket.id);
    });

  };

  export const sendConnectionOffer = (data) => {
  
    socketIO.emit("connection-offer", data);

  };
