'use strict';

var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 300,
        resizable: false,
        width: 300
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
