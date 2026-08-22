export const startRun = () => {
  return chrome.runtime.sendMessage({ type: "START_RUN" });
};
