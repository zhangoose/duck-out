//var c = document.getElementById('screen')
//var ctx = c.getContext("2d");
  
function duck(ctx,x,y){
	drawTop(ctx,x,y);
	drawBottom(ctx,x,y);
	drawEyes(ctx,x,y);
	drawMouth(ctx,x,y);

}/*end of function duck*/

function drawTop(ctx,x,y) {
	ctx.beginPath();
	ctx.moveTo(27 + x ,68 + y);
	ctx.bezierCurveTo(42 + x, 46 + y, 52 + x, 56 + y, 57 + x , 68 + y);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

function drawBottom(ctx,x,y){

	ctx.beginPath();
	ctx.moveTo(27 + x, 68+ y);
	ctx.bezierCurveTo(13+ x, 93 + y, 72 + x, 90 + y, 57 + x, 68 + y);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

function drawEyes(ctx,x,y){
	ctx.beginPath();
	ctx.arc( 37 + x,69 + y, 2,0,2*Math.PI,true);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();

	ctx.beginPath();
	ctx.arc( 46 + x,69 + y, 2,0,2*Math.PI,true);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();

}

function drawMouth(ctx,x,y){
	ctx.beginPath();
	ctx.moveTo(34 + x,75 + y);
	ctx.bezierCurveTo(34 + x ,72 + y,44 + x,72 + y,48 + x,75 + y);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "orange";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(34 + x,75 + y);
	ctx.bezierCurveTo(34 + x,80 + y,47 + x,80 + y,48 + x,75 + y);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "orange";
	ctx.fill();
	
}
