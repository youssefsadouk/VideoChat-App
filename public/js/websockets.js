import * as store from './state.js'
import * as ui from './ui.js'

export const registerSocketEvents = (socket) => {
  
    socket.on("connect", () => {
      console.log("succesfully connected to socket.io server");
      store.setSocketId(socket.id);
      ui.updatePersonalKey(socket.id);
    });

  };
