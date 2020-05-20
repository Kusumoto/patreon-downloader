var tempData = "";

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "setPatreonPayload":
                tempData = message.payload;
                break;
            case "getPatreonPayload":
                sendResponse(tempData);
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);