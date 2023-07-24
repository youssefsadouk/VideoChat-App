import * as wss from './websockets.js';

export const sendConnectionOffer = (callType, calledPersonKey)=>{
    const data = {
        callType,
        calledPersonKey,
    };
    wss.sendConnectionOffer(data);
                                             
}
export const handleConnectionOffer = (data)=>{
    console.log("connection offer came from server!");
    console.log(data);
                                             
}