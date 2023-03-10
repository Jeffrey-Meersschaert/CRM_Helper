function searchSelectedText(info) {
  let searchTerm = info.selectionText;
  switch (info.menuItemId) {
    case "FTGlobal-Search":
      openTab(
        `https://financialtimes.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`
      );
      break;
    case "FTLive-Search":
      openTab(
        `https://ftlive.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`
      );
      break;
    case "FTBlink-Search":
      openTab(
        `https://ft-blink.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`
      );
      break;
    case "People-Finder-Search":
      openTab(`https://people-finder.in.ft.com/search?name=${searchTerm}`);
      break;
    default:
      console.log("Invalid selection.");
  }
}

function openTab(urlstring) {
  chrome.tabs.create({ url: urlstring });
}

chrome.contextMenus.create({
  id: "FTGlobal-Search",
  title: "FT Global",
  contexts: ["selection"],
  parentId: null,
});
chrome.contextMenus.create({
  id: "FTLive-Search",
  title: "FT Live",
  contexts: ["selection"],
  parentId: null,
});
chrome.contextMenus.create({
  id: "FTBlink-Search",
  title: "Blink",
  contexts: ["selection"],
});
chrome.contextMenus.create({
  id: "seperator",
  contexts: ["selection"],
  type: "separator",
  parentId: null,
});
chrome.contextMenus.create({
  id: "People-Finder-Search",
  title: "People Finder",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(searchSelectedText);
