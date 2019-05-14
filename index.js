const electron = require('electron')
const { shell } = require('electron')
var execFile = require('child_process').execFile
const { app, BrowserWindow } = require('electron')


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 1200, height: 800, autoHideMenuBar: true, frame: true })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)
