var c = document.getElementById('screen');
var ctx = c.getContext("2d");
var WIDTH = c.width;  //width of canvas
var HEIGHT = c.height;	//height of canvas
var x = 10;		//x coordinate for the ball
var y = 100;	//y coordinate for the ball
var chx = 3;	//how much to add to x for ball
var chy = 3;	//how much to add to y for ball
var BWIDTH;		//width of bar
var BHEIGHT;	//height of bar
var bx = 150;	//x coordinate of bar
var by = 290;	//y coordinate of bar
var bchx;		//how much to add to x for bar
var bchy;		//how much to add to y for bar

function mouse(mevent){
	if(mevent.pageX + 50 < WIDTH && mevent.pageX > 0){
		bx = mevent.pageX;
		console.log("Here");
	}
	console.log(mevent.pageX);
}/*end of mouse function*/

$(document).mousemove(mouse);

function circle(x,y,rad){
	ctx.beginPath();
	ctx.arc(x,y,rad,0, 2*Math.PI,true);
	ctx.closePath();
	ctx.fillStyle = 'black';
	ctx.fill();
}/*end of cirlce function*/

function rectangle(x,y,width,height){
	ctx.beginPath();
	ctx.fillRect(x,y,width,height);
	ctx.closePath();
	ctx.fillStyle = "rgb(0,255,0)";
	ctx.fill();
}/*end of rectangle function*/

function clearRect(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);		
}/*end of clearRect function*/

function cdraw(){
	clearRect();
	circle(x,y,8);
	rectangle(bx,by,50,10);

	if(x > WIDTH || x < 0){
		chx = -chx;
	}/*end of if x*/
	if(y > HEIGHT || y < 0){
		chy = -chy;
	}/*end of if y*/
	x = x + chx;
	y = y + chy;
}/*end of cdraw*/

function init(){
	console.log("width: " + WIDTH);
	console.log("height: " + HEIGHT);

	setInterval(cdraw,40);

}/*end of init function*/

init();
