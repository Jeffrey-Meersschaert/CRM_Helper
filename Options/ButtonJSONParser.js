//TODO: implement rejects or throw errors
export function GetButtons(file) {
    return new Promise((resolve, reject) => {
        const url = chrome.runtime.getURL(file);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data.Buttons);
            });
    });
}

export function GetContextmenuStripOrder(file) {
    return new Promise((resolve, reject) => {
        const url = chrome.runtime.getURL(file);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data.contextMenuStripOrder);
            });
    });
}