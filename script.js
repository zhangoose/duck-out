var c = document.getElementById('screen');
var ctx = c.getContext("2d");
var WIDTH = c.width;	//width of canvas
var HEIGHT = c.height;	//height of canvas
var x = 10;		//x coordinate for the ball (initial)
var y = 100;	//y coordinate for the ball (initial)
var chx = 5;	//how much to add to x for ball
var chy = 5;	//how much to add to y for ball
var BWIDTH;		//width of bar
var BHEIGHT;	//height of bar
var bx = 150;	//x coordinate of bar
var bx_end = 150 + 50; //end of x bar
var by = 290;	//y coordinate of bar
var bchx;		//how much to add to x for bar
var bchy;		//how much to add to y for bar
var duckCount = 1;	//to count how many ducks are on screen? may use may not
var volleyCount = 1;	// how many volleys done so far
var duckBricks; // array of possible coordinates
var currentIndex; // current index of the duck for hits



duckBricks = init_duckArray(c);

function mouse(mevent){
	if(mevent.pageX + 50 < WIDTH && mevent.pageX > 0){
		bx = mevent.pageX;
	}
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
	// to draw circles... aka balls / bars 
	clearRect();
	circle(x,y,8);
	rectangle(bx,by,50,10);

//	duck(ctx,Math.floor((Math.random()*300)), Math.floor((Math.random()*150)));

	fillUpWithDucks(ctx,duckBricks);


	// IF ( CURRENT X POSITION OF BALL WENT OVER RIGHT SIDE LIMIT OF CANVAS )
	// IF ( CURRENT X POSITION OF BALL WENT OVER LEFT SIDE LIMIT OF CANVAS )
	if(x + chx> WIDTH || x + chx < 0){
		console.log("x + chx > width || x + chx < 0");
		chx = -chx;
	}/*end of if x*/
	
	// IF ( CURRENT Y POSITION OF BALL WENT OVER UPPER LIMIT OF CANVAS )
	if(y + chy > HEIGHT){

		if(x > bx && x < bx + 50){
			console.log("On a paddle");
			duckBricks[currentIndex].hits++;
			console.log("you got " + duckBricks[currentIndex].hits + " hits");
			if(duckBricks[currentIndex].hits >= 3
					&& duckBricks[currentIndex].isDead == false){
				// spawn another duck
				console.log("spawn another duck");
				currentIndex = randomDisplaySet(duckBricks);
				duckCount++;
				if(duckCount == 10){
					console.log("DUCKED OUT");
					clearInterval(inter);
				}//end ofi f
			}//end of if more than 3 hits & not dead for taht duck

			console.log("x : " + x);
			console.log("bx : " + bx);
			console.log("bx : " + 50)
			chx = -chx;
			chy = -chy;
		}/*end of if*/
		else{
			console.log("should stop because player lost :O ");
			clearInterval(inter);
			return;
		}
	}/*end of if y*/

	// IF ( CURRENT Y POSITION OF BALL WENT UNDER THE LOWER LIMIT OF CANVAS..... )
	else if(y + chy < 0){
		console.log("else if");
		chy = -chy;
	}/*end of else if*/

	x = x + chx;
	y = y + chy;
}/*end of cdraw*/

function init(){
	console.log("width: " + WIDTH);
	console.log("height: " + HEIGHT);

	inter = setInterval(cdraw,20);


}/*end of init function*/

currentIndex = randomDisplaySet(duckBricks);
init();

