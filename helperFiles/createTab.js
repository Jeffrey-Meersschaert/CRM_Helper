export default function openTab(urlstring) {
    chrome.tabs.create({ url: urlstring });
}