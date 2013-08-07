var c = document.getElementById('screen');
var ctx = c.getContext("2d");
var WIDTH = c.width;	//width of canvas
var HEIGHT = c.height;	//height of canvas
var x = 10;		//x coordinate for the ball (initial)
var y = 100;	//y coordinate for the ball (initial)
var chx = 1;	//how much to add to x for ball
var chy = 5;	//how much to add to y for ball
var BWIDTH;		//width of bar
var BHEIGHT;	//height of bar
var BALLRADIUS = 6;
var DUCKRADIUS = 17;
var bx = 150;	//x coordinate of bar
var bx_end = 150 + 50; //end of x bar
var by = 290;	//y coordinate of bar
var bchx;		//how much to add to x for bar
var bchy;		//how much to add to y for bar
var duckCount = 1;	//to count how many ducks are on screen? may use may not
var volleyCount = 1;	// how many volleys done so far
var duckBricks; // array of possible coordinates
var currentIndex; // current index of the duck for hits
var deadDuckCount = 0; // count the dead ducks



duckBricks = init_duckArray(c);

function hitDuck(duckArr, x, y){
	// loop thru duckArr visibles, check if x,y falls under their bounds.
	// return: which duck was hit <- a duck object
	var i; // looper

	for(i = 0; i < duckArr.length; i++){
		if(duckArr[i].display == true){
			if((Math.abs(duckArr[i].centerX - x) <= DUCKRADIUS + BALLRADIUS)
			&& (Math.abs(duckArr[i].centerY - y) <= DUCKRADIUS + BALLRADIUS)){
				console.log("COLLIDED");
				return duckArr[i];
			}//end of if collided
		}//end of if displayed
	}//end of for

	return null;;
}//end of hitDuck function

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

function getDucked(){
	// ending scene when you get ducked out 
	setTimeout(function(){
		ctx.beginPath();
		ctx.fillRect(0,0,WIDTH,HEIGHT);
		ctx.closePath();
		ctx.fillStyle = 'black';
		ctx.fill();
		duck(ctx,100,100);
		$("#gamestat").text("ducked out (you lose)");
	},500);
	
}//end of getDucked function

function cdraw(){
	// to draw circles... aka balls / bars 
	clearRect();
	circle(x,y,BALLRADIUS);
	rectangle(bx,by,50,10);

//	duck(ctx,Math.floor((Math.random()*300)), Math.floor((Math.random()*150)));

	fillUpWithDucks(ctx,duckBricks);


	// IF ( CURRENT X POSITION OF BALL WENT OVER RIGHT SIDE LIMIT OF CANVAS )
	// IF ( CURRENT X POSITION OF BALL WENT OVER LEFT SIDE LIMIT OF CANVAS )
	if(x + chx> WIDTH || x + chx < 0){
		console.log("x + chx > width || x + chx < 0");
		console.log(" WALL: chx is " + chx);
		chx = -chx;
		
		console.log("2WALL: chx is " + chx);
	}/*end of if x*/

	// IF( BALL HIT A DUCK)
	if(hitDuck(duckBricks,x,y) != null){
		// COLLISION DETECTION
		var currDuck = hitDuck(duckBricks,x,y);
		currDuck.display = false;		
		currDuck.isDead = true;
		duckCount--;
		deadDuckCount++;
		$("#text").text("DEAD DUCK COUNT: " + deadDuckCount);
		//chx = -chx;
		chy = -chy;
	}//end of if 
	
	// IF ( CURRENT Y POSITION OF BALL HIT THE FLOOR OR THE PADDLE )
	if(y + chy > HEIGHT){

		if(x > bx && x < bx + 50){
			// ON THE PADDLE
			console.log("On a paddle");
			duckBricks[currentIndex].hits++;
			console.log("you got " + duckBricks[currentIndex].hits + " hits");
			if( (duckBricks[currentIndex].hits >= 2
		//			&& duckBricks[currentIndex].isDead == false)
				)
					|| (duckCount == 0 && ducksComplete(duckBricks) == false) ){
				// spawn another duck
				console.log("spawn another duck");
				currentIndex = randomDisplaySet(duckBricks);
				if(duckCount == 10){
					console.log("DUCKED OUT");
					clearInterval(inter);
					getDucked();
				}//end of if
				duckCount++;
			}//end of if more than 3 hits & not dead for taht duck
			var diff = x - bx;
			console.log("diff is " + diff);

			//chx = -chx;
			chx = 8 * ((x-(bx_end/2))/(50));
			console.log("orig: chx = " + chx);
			if(Math.abs(chx) > 5){
				if(chx > 0){
					chx = 3;
				}
				else{
					chx = -3;
				}//end of if negative
			}//end of if over limit 
			console.log("now: chx is " + chx);
			chy = -chy;
		
		}/*end of if*/
		else{
			console.log("should stop because player lost :O ");
			clearInterval(inter);
			getDucked();
			return;
		}
	}/*end of if y*/

	// IF ( CURRENT Y POSITION OF BALL HIT THE CEILING..... )
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

currentIndex = randomDisplaySet(duckBricks); // initialize
init();

