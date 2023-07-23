import * as wss from './websockets.js';

export const sendConnectionOffer = (callType, calledPersonKey)=>{
    const data = {
        callType,
        calledPersonKey,
    };
    wss.sendConnectionOffer(data);
                                             
}