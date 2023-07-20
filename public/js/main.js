import * as store from "./state.js";
import * as wss from "./websockets.js"

const socket = io("/");

wss.registerSocketEvents(socket);