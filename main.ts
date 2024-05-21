const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    // frame: false,
    // titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // 打开开发工具
  // win.webContents.openDevTls()oo1
  // 如果打包了，渲染index.html
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../index.html"));
  } else {
    let url = "https://giswrold.web.app"; // 本地启动的vue项目路径
    win.loadURL(url);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// 也可以拆分成几个文件，然后用 require 导入。
