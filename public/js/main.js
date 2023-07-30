import * as store from "./state.js";
import * as wss from "./websockets.js"
import * as webRTCHandler from "./webRTCHandler.js";
import * as constants from "./constants.js";
import {getIncomingCallDialog} from "./elements.js";
import { showIncomingCallDialog } from "./ui.js";

const socket = io("/");

wss.registerSocketEvents(socket);

const personalkeycopyBtn = document.getElementById("personal_key_copy_button");

personalkeycopyBtn.addEventListener("click", ()=>{
    const personal_key= store.getState().socketId;
    navigator.clipboard && navigator.clipboard.writeText(personal_key);
})

// preparing the connection offer
const personalKeyChatButton = document.getElementById(
    "personal_key_chat_button"
  );
  
  const personalKeyVideoButton = document.getElementById(
    "personal_key_video_button"
  );
  
  personalKeyChatButton.addEventListener("click", () => {
    console.log("chat button clicked");
  
    const calleePersonalKey = document.getElementById(
      "personal_key_input"
    ).value;
    const callType = constants.callType.CHAT_PERSONAL_KEY;
  
    webRTCHandler.sendConnectionOffer(callType, calleePersonalKey);
  });
  
  personalKeyVideoButton.addEventListener("click", () => {
    console.log("video button clicked");
  
    const calleePersonalKey = document.getElementById(
      "personal_key_input"
    ).value;
    const callType = constants.callType.VIDEO_PERSONAL_KEY;
  
    webRTCHandler.sendConnectionOffer(callType, calleePersonalKey);
  });


  showIncomingCallDialog("VIDEO", ()=>{}, ()=>{});