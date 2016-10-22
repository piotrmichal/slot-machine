var start = document.getElementById('start');
var stop = document.getElementById('stop');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var icons = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9'];

start.addEventListener('click', startDrawing, false);
stop.addEventListener('click', stopDrawing, false);
	
	function startDrawing(){
		var rand;

		rand = Math.floor(Math.random() * 9);
		one.innerHTML = '<img src="css/img/' + icons[rand] + '.jpg">';
		rand = Math.floor(Math.random() * 9);
		two.innerHTML = '<img src="css/img/' + icons[rand] + '.jpg">';
		rand = Math.floor(Math.random() * 9);
		three.innerHTML = '<img src="css/img/' + icons[rand] + '.jpg">';

		e = setTimeout('startDrawing()', 80);
	}


	function stopDrawing() {
 		quit = clearTimeout(e);
 	}