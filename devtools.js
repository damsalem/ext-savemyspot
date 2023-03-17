const logoUrl = chrome.runtime.getURL("logo.png");

chrome.devtools.panels.create("My Panel", "logo.png", "devtools.html");
