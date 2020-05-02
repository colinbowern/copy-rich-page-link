console.log('loading');
var browser = browser || chrome;

browser.browserAction.onClicked.addListener((tab) => {
    console.log("hello");
    var link = document.createElement('a');
    link.setAttribute('href', tab.url);
    link.innerText = tab.title;
    console.log("Writing " + link.outerHTML);

    var dt = new clipboard.DT();
    dt.setData("text/plain", tab.url);
    dt.setData("text/html", link.outerHTML);
    clipboard.write(dt);
});