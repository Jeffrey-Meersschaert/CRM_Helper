import openTab from "/helperFiles/createTab.js";
document.addEventListener("DOMContentLoaded", () => {
  console.log("doc loaded");

  const body = document.getElementsByTagName("body")[0];

  const input = document.createElement("input");
  input.id = "input";

  const ftglobalButton = document.createElement("button");
  ftglobalButton.innerHTML = "FT Global";
  ftglobalButton.id = "ft-global";
  ftglobalButton.addEventListener("click", handleButtonClick);

  const ftLiveButton = document.createElement("button");
  ftLiveButton.innerHTML = "FT Live";
  ftLiveButton.id = "ft-live";
  ftLiveButton.addEventListener("click", handleButtonClick);

  const ftBlinkButton = document.createElement("button");
  ftBlinkButton.innerHTML = "Blink";
  ftBlinkButton.id = "ft-blink";
  ftBlinkButton.addEventListener("click", handleButtonClick);

  const PeopleFinder = document.createElement("button");
  PeopleFinder.innerHTML = "People Finder";
  PeopleFinder.id = "peoplefinder";
  PeopleFinder.addEventListener("click", handleButtonClick);

  body.appendChild(input);
  body.appendChild(ftglobalButton);
  body.appendChild(ftLiveButton);
  body.appendChild(ftBlinkButton);
  body.appendChild(PeopleFinder);
});

const handleButtonClick = (event) => {
  let searchTerm = document.getElementById("input").value;
  switch (event.target.id) {
    case "ft-global":
      openTab(`https://financialtimes.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`);
      break;
    case "ft-live":
      openTab(`https://ftlive.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`);
      break;
    case "ft-blink":
      openTab(`https://ft-blink.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?str=${searchTerm}&searchAll=true`);
      break;
    case "peoplefinder":
      openTab(`https://people-finder.in.ft.com/search?name=${searchTerm}`);
      break;
    default:
      console.log("Invalid selection.");
  }
};
