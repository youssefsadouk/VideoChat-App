import * as wss from './websockets.js';
import * as constants from "./constants.js";
import * as ui from "./ui.js";

let connectedUserDetails;

export const sendConnectionOffer = (callType, calledPersonKey)=>{
    const data = {
        callType,
        calledPersonKey,
    };
    wss.sendConnectionOffer(data);
                                             
}
export const handleConnectionOffer = (data)=>{
    const { callType, callerSocketId } = data;

  connectedUserDetails = {
    socketId: callerSocketId,
    callType,
  };

  if (
    callType === constants.callType.CHAT_PERSONAL_KEY ||
    callType === constants.callType.VIDEO_PERSONAL_KEY
  ) {
    console.log("showing call dialog");
    ui.showIncomingCallDialog(callType, acceptCallHandler, rejectCallHandler);
  }
                                             
}

const acceptCallHandler = () => {
    console.log("call accepted");
  };
  
  const rejectCallHandler = () => {
    console.log("call rejected");
  };
  
  const callingDialogRejectCallHandler = () => {
    console.log("rejecting the call");
  };