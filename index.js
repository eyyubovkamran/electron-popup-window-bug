const { BrowserWindow, app } = require("electron");

let win;
app.on("ready", () => {
    win = new BrowserWindow();
    win.loadURL("https://sfbay.craigslist.org/");
    win.webContents.executeJavaScript("(" + (() => {
        const onClick = () => window.open("/");
        document.querySelectorAll("a").forEach(el => el.addEventListener("click", onClick));
    }).toString() + ")()");
});

app.on("window-all-closed", () => {
    app.quit();
});
