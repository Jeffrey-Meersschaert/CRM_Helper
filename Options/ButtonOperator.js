import {GetButtons,GetContextmenuStripOrder} from "./ButtonJSONParser.js";

export async function createContextMenu() {
    let fileLocation = "Options/buttonOptions.JSON";
    let contextmenuStripOrder = await GetContextmenuStripOrder(fileLocation);
    let buttons = await GetButtons(fileLocation);
    //find button with id = "FTGlobal-Search"

    //iterate through contextmenuStripOrder
    for (const contextMenuItem in contextmenuStripOrder) {
        const targetID = contextmenuStripOrder[contextMenuItem];
        if (targetID === "separator")
        {
            chrome.contextMenus.create({
                id: "separator",
                type: "separator",
                contexts: ["selection"]
            })
        }
        else {
            for (const buttonName in buttons) {
                const button = buttons[buttonName];
                if (button.id === targetID) {
                    //create context menu item
                    chrome.contextMenus.create({
                        id: button.id,
                        title: button.title,
                        contexts: ["selection"]
                    });
                }
            }
        }
    }

    }




