chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    // Code to be executed on first install
  } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    // When extension is updated
  } else if (
    details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE
  ) {
    // When browser is updated
  } else if (
    details.reason === chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE
  ) {
    // When a shared module is updated
  }
});

chrome.commands.onCommand.addListener((shortcut) => {
  if (shortcut === "reload-q") {
    chrome.runtime.reload();
  }
});
