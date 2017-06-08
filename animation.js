$(document).ready(function() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext("2d");
      canvas.width = 400;
      canvas.height = 400;
      document.body.appendChild(canvas);


/* Listen to keyboard events */
  var keysDown = {};
  
  window.addEventListener("keydown", function(e) {
     keysDown[e.keyCode] = true;
  }, false);
  
  window.addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
  });
    
    window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
    
  
  
  
/* Draw everything */
var render = function() {

    drawPlayer(ctx);
    drawEnemy(ctx);
};

/* Update stuff every loop */
var update = function(delta) {
    if (38 in keysDown) {
       movePlayer("up");   
    } 
    if (40 in keysDown) {
       movePlayer("down");
    }
    if (37 in keysDown) {
      movePlayer("left");
    }
    if (39 in keysDown) {
      movePlayer("right");
    }
    moveEnemies();
    resetI();
};

/* Time-based motion animation */
var main = function() {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};
  
var then = Date.now();
main();
  
});

