chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("leetcode.com")) {
    const queryParameters = tab.url.split("s/")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
    });
  }
});
