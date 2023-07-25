import * as constants from "./constants.js";
import * as elements from "./elements.js";

export const updatePersonalKey = (personalKey) => {
    const personalKeyParagraph = document.getElementById(
      "personal_key_paragraph"
    );
    personalKeyParagraph.innerHTML = personalKey;
  };

  export const showIncomingCallDialog = (
    callType,
    acceptCallHandler,
    rejectCallHandler
  ) => {
    const callTypeInfo =
      callType === constants.callType.CHAT_PERSONAL_KEY ? "Chat" : "Video";
  
    const incomingCallDialog = elements.getIncomingCallDialog(
      callTypeInfo,
      acceptCallHandler,
      rejectCallHandler
    );
  
  }