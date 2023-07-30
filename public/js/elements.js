export const getIncomingCallDialog = (callTypeInfo, acceptCallHandler, rejectCallHandler) => {
    console.log("getting incoming call dialog");
    const dialog = document.createElement("div");
    dialog.classList.add("dialog_wrapper");
    const dialogContent = document.createElement("div");
    dialogContent.classList.add("dialog_content");
    dialog.appendChild(dialogContent);

    const dialogHTML = document.getElementById("dialog");
    dialogHTML.appendChild(dialog);
}