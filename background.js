chrome.commands.onCommand.addListener((shortcut) => {
    if(shortcut === 'reload-e') {
        chrome.runtime.reload();
    }
})