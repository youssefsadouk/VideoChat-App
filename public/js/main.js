import * as store from "./state.js";
import * as wss from "./websockets.js"

const socket = io("/");

wss.registerSocketEvents(socket);

const personalkeycopyBtn = document.getElementById("personal_key_copy_button");

personalkeycopyBtn.addEventListener("click", ()=>{
    const personal_key= store.getState().socketId;
    navigator.clipboard.writeText(personal_key);
})