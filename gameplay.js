function Duck(xCoord, yCoord){
	// for the Duck object
	this.xCoord = xCoord; // xcoord of this duck
	this.yCoord = yCoord; // ycoord of this duck
	this.hits = 0; // hits attempted for this duck
	this.display = false; // to display or not to display

}//end of Duck object initializer


function fillUpWithDucks(ctx, coords){
	// fills up whatever coordinates specified in array 'coords' with duck drawings on screen
	// does the drawing
	var i; // looper

	for(i = 0 ; i < coords.length;  i=i+2){
		console.log("x is " + coords[i] + "   | y is " + coords[i+1]);
		duck(ctx,coords[i],coords[i+1]);	
	}//end of for 

}//end of function fillUpWithDucks

function init_duckArray(c){
	// to return out the array of possible coordinates for duckies
	var ctx = c.getContext("2d");
	var NUMDUCKS = 10;
	var WIDTH  =c.width;
	var duckBlocks = new Array(NUMDUCKS * 2); // x on odds, y on evens
			// duckBlocks is the array of duck coords

	var i; // looper for array
	var offset = WIDTH / 6;
	var x = 0; // x coord

	console.log("rawrawr length is " + duckBlocks.length);
	console.log("rawrawr offset is " + offset);
	
	for(i = 0; i < duckBlocks.length; i++){
		// x on odds
		// y on evens

		if(i % 2 == 0){
			//  X
			// going to be the same for either row
			console.log("x");
			if(i == 10){
				x = 0; 
			}//end of if
			duckBlocks[i] = x; 
			x = x + offset;
			console.log("duckBlocks[" + i + "] = " + duckBlocks[i]);
		}//end of if odd

		else{
			// Y
			// different depending on which row
			console.log("y");
			if(i <= 10){
				duckBlocks[i] = 0;
				console.log("duckBlocks[" + i + "] = " + duckBlocks[i]);
			}//first row
			else{
				duckBlocks[i] = offset;
				console.log("duckBlocks[" + i + "] = " + duckBlocks[i]);
			}//second row

		}//end of even
		
	}//end of for looping through array to populate
	
	return duckBlocks;

}//end of function init_duckArray
