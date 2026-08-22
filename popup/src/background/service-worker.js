console.log("[LinkedIn] service worker запущено");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "START_RUN") {
    console.log("[LinkedIn] отримано команду START_RUN");
    sendResponse({ status: "started" });
  }

  if (message.type === "STOP_RUN") {
    console.log("[LinkedIn] отримано команду STOP_RUN");
    sendResponse({ status: "stopped" });
  }

  return true
});
