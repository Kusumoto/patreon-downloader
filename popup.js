async function isPatreonPostSite() {
  return chrome.tabs.query(
    { active: true, lastFocusedWindow: true },
    (tabs) => {
      const url = tabs[0].url;
      if (url.indexOf("https://www.patreon.com/posts/") > -1) {
        $("#not-patreon-site-label").hide();
        $("#patreon-download-btn").show();
      } else {
        $("#not-patreon-site-label").show();
        $("#patreon-download-btn").hide();
      }
    }
  );
}
function openPatreonPostDownloadSite() {
  chrome.tabs.create(
    {
      url: chrome.runtime.getURL("downloader.html"),
    },
    (c) => {
      console.log(c)
    }
  );
}

(function () {
  isPatreonPostSite();
  $("#patreon-download-btn").click(() => {
    openPatreonPostDownloadSite();
  });
})();
