import openTab from "/helperFiles/createTab.js";
import {createContextMenu} from "./Options/ButtonOperator.js";
function searchSelectedText(info) {
  let searchTerm = info.selectionText;
  switch (info.menuItemId) {
    case "FTGlobal-Search":
      openTab(`https://financialtimes.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`);
      break;
    case "FTLive-Search":
      openTab(`https://ftlive.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`);
      break;
    case "FTBlink-Search":
      openTab(`https://ft-blink.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`);
      break;
    case "People-Finder-Search":
      openTab(`https://people-finder.in.ft.com/search?name=${searchTerm}`);
      break;
    default:
      console.log("Invalid selection.");
  }
}
createContextMenu()

chrome.contextMenus.onClicked.addListener(searchSelectedText);
