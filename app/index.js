'use strict';

var electron = require('electron');
var ipc = require('electron').ipcRenderer;

var circle = document.getElementById("circle");
var mousedown = false

circle.addEventListener('mousedown', function () {
	var screen = electron.screen.getPrimaryDisplay().bounds
    var cursor = electron.screen.getCursorScreenPoint()
    ipc.send('clicked-pos', cursor.x, cursor.y);
    var msg = 'x: '+cursor.x
    msg += '<br>y: '+cursor.y
    msg += '<br>sx: '+screen.x
    msg += '<br>sy: '+screen.y
    msg += '<br>sw: '+screen.width
    msg += '<br>sh: '+screen.height
    circle.innerHTML = msg
    mousedown = true
    stick();
});

circle.addEventListener('mouseup', function (e) {
	mousedown = false
	console.log(mousedown)
});

/*circle.addEventListener('mousemove', function (e) {
	if (mousedown) {
		ipc.send('clicked-pos', e.screenX, e.screenY)
	}
});*/
var sy = 0
function stick() {
	sy ++;
	console.log(sy)
	var c = electron.screen.getCursorScreenPoint()
	ipc.send('clicked-pos', c.x, c.y)

}

console.log = function(msg) {
	ipc.send('console', msg)
}

circle.addEventListener('drag', function (e) {
	console.log('hi')
	circle.innerHTML = e.clientX
})

/*var interval;
function start() {
  interval = setInterval(function(){
    console.log('down');
  }, 100);
}
function stop() {
  clearInterval(interval);
}*/
