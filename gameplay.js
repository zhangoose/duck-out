function Duck(xCoord, yCoord){
	// for the Duck object
	this.xCoord = xCoord; // xcoord of this duck
	this.yCoord = yCoord; // ycoord of this duck
	this.hits = 0; // hits attempted for this duck
	this.display = false; // to display or not to display
	this.isDead = false; // is the duck dead or not (hit or not)
	this.centerX = -1;	// center radius initial -1
	this.centerY = -1;	// center radius initial -1

}//end of Duck object initializer

function printDuck(duckArr){
	//prints the attributes of the duck 
	//for debugging

	var i;

	for(i = 0; i < duckArr.length; i++){
		console.log("duckArr["+i+"]: xCoord is " + duckArr[i].xCoord + " & yCoord is " + duckArr[i].yCoord + " & hits is " + duckArr[i].hits + " & display is " + duckArr[i].display + " & centerX is " + duckArr[i].centerX + " & centerY is " + duckArr[i].centerY);
	}//end of for
}//end of printDuck


function fillUpWithDucks(ctx, duckArr){
	// draws any duck in duckArr that has display set ias true
	var i; // looper

	for(i = 0 ; i < duckArr.length;  i++){
//		console.log("x is " + coords[i] + "   | y is " + coords[i+1]);
		if(duckArr[i].display == true){
			duck(ctx,duckArr[i].xCoord,duckArr[i].yCoord);	
		}//end of if should display or not
	}//end of for 

}//end of function fillUpWithDucks

function init_duckArray(c){
	// to return out the array of possible coordinates for duckies
	var ctx = c.getContext("2d");
	var NUMDUCKS = 10;
	var WIDTH  =c.width;
	var duckBlocks = new Array(NUMDUCKS); // ARRAY OF DUCK OBJECTS

	var i; // looper for array
	var offset = WIDTH / 6;
	var x = 0; // x coord
	var y = 0; // y coord

	console.log("rawrawr length is " + duckBlocks.length);
	console.log("rawrawr offset is " + offset);
	
	for(i = 0; i < duckBlocks.length; i++){
		// x on odds
		// y on evens

			//  X
			// going to be the same for either row
			if(i == duckBlocks.length /2){
				x = 0; 
			}//end of if

			// Y
			// different depending on which row
			if(i < duckBlocks.length /2){
				y = 0;
			}//first row
			else{
				y  = offset;
			}//second row
		
		duckBlocks[i] = new Duck(x,y); 
		duckBlocks[i].centerX = 42 + x;
		duckBlocks[i].centerY = 71 + y;
		x = x + offset;
	}//end of for looping through array to populate
	printDuck(duckBlocks);

	return duckBlocks;

}//end of function init_duckArray

function randomDisplaySet(duckArr){
	// sets the display value of a duck as true 
	// randomly picks that duck's index
	// returns that index

	var flag = false; 	
	var index;

	while(!flag){
		// to prevent duplicates
		index = Math.floor(Math.random()*duckArr.length);
		if(duckArr[index].display != true){
			duckArr[index].display = true;
			flag = true;
		}

	}//end of while !flag
	return index;

}//end of randomDisplaySet function

function ducksComplete(duckArr){
	// all ducks dead
	var i;
	for(i = 0; i < duckArr.length; i++){
		if(duckArr[i].isDead == false){
			return false;
		}//end of if
	}//end of for
	return true; // means all ducksa re dead
}//end of ducksComplete
