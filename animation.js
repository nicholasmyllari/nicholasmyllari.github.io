
window.onload = (function() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  document.body.appendChild(canvas);
  add4Enemies();

  //Hero
  var playerReady = false;
  var playerImage = new Image();
  playerImage.onload = function () {
    playerReady = true;
  };
  playerImage.src = "assets/gorksprite.png";


/* Listen to keyboard events */
  var keysDown = {};
  
  window.addEventListener("keydown", function(e) {
     keysDown[e.keyCode] = true;
     event.preventDefault();
     
  }, false);
  
  window.addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
  });
  

var i = 0;
/* Draw everything */
var render = function() {
  ctx.fillStyle = '#111111';
  ctx.fillRect(0,0,500,500);
  i++;
  if (playerReady) {
    if ((i % 60) < 15) {
     ctx.drawImage(playerImage, 0, 0, 16, 16, player.x , player.y, 32, 32);
    }
    if ((i % 60) < 30 && (i % 60) >= 15) {
     ctx.drawImage(playerImage, 16, 0, 16, 16, player.x , player.y, 32, 32);
    }
    if ((i % 60) < 45 && (i % 60) >= 30) {
     ctx.drawImage(playerImage, 32, 0, 16, 16, player.x , player.y, 32, 32);
    }
    if ((i % 60) >= 45) {
     ctx.drawImage(playerImage, 48, 0, 16, 16, player.x , player.y, 32, 32);
    }
  }
  drawAndMoveEnemies(ctx);


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
};

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
canvas.addEventListener("mousedown", function(e) {
     removeEnemy(getMousePos(canvas,e).x, getMousePos(canvas,e).y);
  })
function removeEnemy(clickX, clickY) {
     for(i = 0; i < enemies.length; i++){
        var e = enemies[i]
        if(Math.abs(e.x-clickX) < 20 && Math.abs(e.y-clickY) < 20)
          enemies.splice(i,1)
     }
}

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
console.log(player)
var then = Date.now();
main();
  
});