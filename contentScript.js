const pageHtml = document.documentElement.innerHTML;
const payload = "{".concat(pageHtml.split("Object.assign(window.patreon.bootstrap, {")[1].split(");")[0]);

chrome.runtime.sendMessage({type: "setPatreonPayload", payload: payload});