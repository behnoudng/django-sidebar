const toggleButton = document.getElementById("toggleButton");
let extensionEnabled = true;

chrome.storage.sync.get("extensionEnabled", function (data) {
    extensionEnabled = data.extensionEnabled !== false;
    updateButtonLabel();
});

toggleButton.addEventListener("click", function () {
    extensionEnabled = !extensionEnabled;
    updateButtonLabel();
    chrome.storage.sync.set({ extensionEnabled: extensionEnabled });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { enableExtension: extensionEnabled });
    });
});


function updateButtonLabel() {
    toggleButton.textContent = extensionEnabled ? "Disable Extension" : "Enable Extension";
}