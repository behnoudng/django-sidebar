const contentDiv = document.querySelector("div[role='main']");
const sidebar = document.querySelector("div[role='complementary']"); 

const menuDiv = document.getElementById("version-switcher");

if (contentDiv) {
    contentDiv.style.width = "99.8%";
}
if (sidebar){
    sidebar.style.display = "none";
}
if(menuDiv) {
    menuDiv.style.display = "none";
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.enableExtension) {
        contentDiv.style.width = "99.8%";
        sidebar.style.display = "none";
        menuDiv.style.display = "none";
    } else {
        contentDiv.style.width = ""; 
        sidebar.style.display = "";
        menuDiv.style.display = ""; 
    }
});