var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function clearCanvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//1. Draw a triangle
function drawTri(){
	clearCanvas();
	 ctx.beginPath();
	 ctx.moveTo(0,0); //start of object
	 ctx.lineTo(300,150);
	 ctx.lineTo(0,150);
	 ctx.lineTo(0,0);
	 ctx.stroke(); //draw the object
}

//2. Draw a pentagon
function drawPent(){
	clearCanvas();
	//with help from http://scienceprimer.com/drawing-regular-polygons-javascript-canvas
	var numberOfSides = 5,
    size = 20,
    Xcenter = 25,
    Ycenter = 25;
	
	ctx.beginPath();
	ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          

	for (var i = 1; i <= numberOfSides;i += 1) {
    	ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
	}
	ctx.stroke();	
}

//3. Draw a hexagon
function drawHex(){
	clearCanvas();
	var numberOfSides = 6,
    size = 20,
    Xcenter = 25,
    Ycenter = 25;
	
	ctx.beginPath();
	ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          

	for (var i = 1; i <= numberOfSides;i += 1) {
    	ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
	}
	ctx.stroke();	
}

//5. The drawIamge.js example in the notes folder does not quite show the full image.  Can you fix this so that the whole picutre is shown?
function drawImage2(){
	clearCanvas();
	var img = new Image();
	img.src = "img.jpg";
    img.onload = function(){
    	ctx.drawImage(img, 200,200); 
    }
}

//6. Use the example animation program and create your own animation
function drawAni(){
	clearCanvas();
	var img = new Image();
	img.onload = animate();

	var fps = 10;
	var xPos=0;
	var yPos=0;
	function animate(){
	setTimeout(draw,1000/fps);
	}

	function draw(){ 
	xPos++;
	yPos++;
	ctx.clearRect(0,0,500,500);
    ctx.drawImage(img, xPos,200);
    ctx.drawImage(img, yPos,200);
    animate();
	}

	img.src = "img.jpg";
}

//7. Create a rectangle and two smaller rectangles inside it
function drawRecInRec(){
	clearCanvas();
	 ctx.beginPath();
	 ctx.moveTo(0,0); //start of rec
	 ctx.lineTo(500,0);
	 ctx.lineTo(500,500);
	 ctx.lineTo(0,500);
	 ctx.lineTo(0,0);
	 ctx.stroke(); //draw the object

	 ctx.moveTo(10,10); //start of new rec
	 ctx.lineTo(490,10);
	 ctx.lineTo(490,490);
	 ctx.lineTo(10,490);
	 ctx.lineTo(10,10);
	 ctx.stroke();

	 ctx.moveTo(50,50); //start of last rec
	 ctx.lineTo(450,50);
	 ctx.lineTo(450,450);
	 ctx.lineTo(50,450);
	 ctx.lineTo(50,50);
	 ctx.stroke();
}

//8. Create a linear gradient with 4 colors like in the example but with a length and width of 100
function drawLinGran(){
	gradient = ctx.createLinearGradient(0, 0, 100, 0);

	gradient.addColorStop(0,    'blue');
	gradient.addColorStop(.25, 'white');
	gradient.addColorStop(.50,  'purple');
	gradient.addColorStop(.75, 'red');
	gradient.addColorStop(1, 'blue');

	ctx.fillStyle = gradient;
	ctx.rect(0, 0, 100, 100);
	ctx.fill();
}

//9. Create a radial gradient with 4 colors like in the example but with a starting circle radius of 30 and ending circle radius of 30
function drawRadGran(){
	gradient = ctx.createRadialGradient(
    	canvas.width/2, canvas.height, 30,
    	canvas.width/2, 0, 30
   	);

	gradient.addColorStop(0, 'blue');
	gradient.addColorStop(0.25, 'white');
	gradient.addColorStop(0.5, 'purple');
	gradient.addColorStop(0.75, 'red');
	gradient.addColorStop(1, 'yellow');

	ctx.fillStyle = gradient;
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fill();
}

//10.  Create a repeating pattern like in the example but use the redBall.png instead of the URL link to an image
function drawRepPat(){
	var img = new Image();
	img.src = 'img2.jpg';
	img.onload = function() {
  		var pattern = ctx.createPattern(img, 'repeat');

		ctx.fillStyle = pattern;
  		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	};
}