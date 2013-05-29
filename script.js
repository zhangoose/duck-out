  var c = document.getElementById('screen');
  var ctx = c.getContext("2d");
  var WIDTH = c.width;
  var HEIGHT = c.height;
  var x = 10;
  var y = 100;
  var chx = 3;
  var chy = 3;
  
  function circle(x,y,rad){
      ctx.beginPath();
      ctx.arc(x,y,rad,0, 2*Math.PI,true);
      ctx.closePath();
      ctx.fillStyle = 'black';
      ctx.fill();
  }/*end of cirlce function*/
  
  function clearRect(){
      ctx.clearRect(0,0,WIDTH,HEIGHT);
  }/*end of clearRect function*/
  
  function cdraw(){
      clearRect();
      circle(x,y,8);
  
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
