// var context;
// var mouse = {x:0, y:0, lineWidth:0, color:'black'};

// window.onload = function(){
// 	$.ajax({
// 		type: "GET",
//         url: "data.txt",
//         dataType: "text",
//         success: function(data) {
// 	        getQuote(data);
//         }
//      });

// 		 context = document.getElementById('canvas').getContext("2d");

// 		//  var button = document.getElementById('canvas_menu_save');
// 		//  button.addEventListener('click', function(e) {
// 		// 	 var dataURL = canvas.toDataURL('image/png');
// 		// 	 button.href = dataURL;
// 		//  });

// 		 drawGraham();
// };

// var getQuote = function(data) {
// 	var fileArray = data.split('\n');
// 	$('.quote').text(fileArray[Math.floor(Math.random()*fileArray.length)]);
// };

// //Menu changes
// var menuChangeColor = function(newColor) { mouse.color = newColor; };
// var menuChangeSize = function(newLineWidth) { mouse.lineWidth = newLineWidth; };
// var menuCanvasClear = function() { context.clearRect(0, 0, canvas.width, canvas.height); };
// var menuSaveGraham = function() {
// 	console.log(window);
// 	console.log('Save my Graham');
// 	var img = canvas.toDataURL('image/png');
// 	document.write('<a href="#">Go Back</a><br/><img src="' + img + '"/>');
// };

// //Draw Graham
// var drawGraham = function() {
// 	// var img = new Image();
// 	// img.src = "graham.jpg";
// 	// img.onload = function () {
// 	// 	context.drawImage(this, 0, 0);
// 	// }

// 	canvas.addEventListener('mousemove', function(e) {
// 		mouse.x = e.pageX - this.offsetLeft;
// 		mouse.y = e.pageY - this.offsetTop;
// 	}, false);

// 	canvas.addEventListener('mouseup', function(e) {
// 		canvas.removeEventListener('mousemove', draw, false);
// 	}, false);

// 	canvas.addEventListener('mousedown', function(e) {
// 		context.beginPath();
// 		context.moveTo(mouse.x, mouse.y);

// 		canvas.addEventListener('mousemove', draw, false);
// 	});

// 	var draw = function() {
// 		context.lineTo(mouse.x, mouse.y);
// 		context.lineCap = 'round';
// 		context.lineWidth = mouse.lineWidth;
// 		context.strokeStyle= mouse.color;
// 		context.stroke();
// 	};

// };
