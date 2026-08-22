export const startRun = () => {
  return chrome.runtime.sendMessage({ type: "START_RUN" });
};

export const stopRun = () => {
  return chrome.runtime.sendMessage({ type: "STOP_RUN" });
};
