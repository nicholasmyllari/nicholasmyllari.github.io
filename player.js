 
/* Player */
var player = {
  x: 250,
  y: 250,
  w: 40,
  h: 40,
  speed: 4
};




function changeSpeed(change) {
  switch (change) {
    case 1:
      player.speed = player.speed + 2;
      break;
    case 2:
      player.speed = Math.max(player.speed - 2 , 0);
      break;
  }
}

function movePlayer(dir) {
  switch (dir) {
    case "left": 
      player.x -= player.speed;
      if (player.x < 0) {
        player.x = 0;
      }
      break;
    case "right":
      player.x += player.speed;
      if (player.x > 468) {
        player.x = 468;
      }
      break;
    case "up":
      player.y -= player.speed;
      if (player.y < 0) {
        player.y = 0;
      }
      break;
    case "down":
      player.y += player.speed;
      if (player.y > 468) {
        player.y = 468;
      }
      break;
  }
}
function removeEnemy(clickX, clickY) {
     for(i = 0; i < enemies.length; i++){
     }