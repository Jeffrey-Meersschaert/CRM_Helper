
function searchSelectedText(info) {
    switch (info.menuItemId){
        case "FTGlobal-Search":

            openTab("FT Global URL= " + info.selectionText)
            break;
        case "FTLive-Search":
            openTab("FT Live URL= " + info.selectionText)
            break;
        case "FTBlink-Search":
            openTab("FT Blink= " + info.selectionText)
            break;
        case "People-Finder-Search":
            openTab("People Finder URL= " + info.selectionText)
            break;
        default:
            console.log("Invalid selection.");
    }

}
function openTab(urlstring){
    chrome.tabs.create({url : urlstring});
}

chrome.contextMenus.create({
    id : "FTGlobal-Search",
    title: "FT Global",
    contexts: ["selection"],
    parentId: null,
    onclick: (info) => searchSelectedText(info)
});
chrome.contextMenus.create({
    id : "FTLive-Search",
    title: "FT Live",
    contexts: ["selection"],
    parentId: null,
    onclick: (info) => searchSelectedText(info)
});
chrome.contextMenus.create({
    id : "FTBlink-Search",
    title: "Blink",
    contexts: ["selection"],
    onclick: (info) => searchSelectedText(info)
});
chrome.contextMenus.create({
    contexts: ["selection"],
    type: "separator",
    parentId: null,
});
chrome.contextMenus.create({
    id : "People-Finder-Search",
    title: "People Finder",
    contexts: ["selection"],
    onclick: (info) => searchSelectedText(info)
});


