function enemy(x,y,w,h,xSpeed,ySpeed) {
 this.x = x;
 this.y = y;
 this.w = w;
 this.h = h;
 this.xSpeed = xSpeed;
 this.ySpeed = ySpeed;
}
var enemies = []; 

function addEnemy(x,y,w,h,xSpeed,ySpeed) {
    enemies.push(new enemy(x,y,w,h,xSpeed,ySpeed));
};
function add4Enemies() {
    addEnemy(100,100,40,40,-2,3);
    addEnemy(400,100,40,40,3,-2);
    addEnemy(100,400,40,40,5,-1);
    addEnemy(400,400,40,40,4,2);
};

function drawAndMoveEnemies(context) {
  for(i = 0; i < enemies.length; i++){
    var e = enemies[i];
    context.beginPath();
    context.clearRect(e.x-e.w/2, e.y-e.h/2, e.w, e.h);
    e.x = e.x + e.xSpeed;
    e.y = e.y + e.ySpeed;
    if (e.x < e.w/2) {
      e.x = e.w/2;
      e.xSpeed = -e.xSpeed;
    };
    if (e.x > (500-e.w/2)) {
      e.x = 500-e.w/2;
      e.xSpeed = -e.xSpeed;
    };
    if (e.y < e.h/2) {
      e.y = e.h/2;
      e.ySpeed = -e.ySpeed;
    };
    if (e.y > (500-e.h/2)) {
      e.y = 500-e.h/2;
      e.ySpeed = -e.ySpeed;
    };
    for(j = 0; j < enemies.length; j++){
        if (i != j) {
            var n = enemies[j];
            if (Math.sqrt(Math.pow((e.x-n.x),2) + Math.pow((e.y - n.y),2)) < 40) {
                e.xSpeed = -e.xSpeed;
                n.xSpeed = -n.xSpeed;
                e.ySpeed = -e.ySpeed;
                n.ySpeed = -n.ySpeed;
            }
            if (Math.sqrt(Math.pow((player.x-n.x),2) + Math.pow((player.y - n.y),2)) < 40) {
                e.xSpeed = -e.xSpeed;
                n.xSpeed = -n.xSpeed;
                e.ySpeed = -e.ySpeed;
                n.ySpeed = -n.ySpeed;
            }
        };
    }
    context.fillStyle = 'lightgreen';
    context.rect(e.x-e.w/2,e.y-e.h/2,e.w,e.h);
    context.fill();
    context.closePath();  
  }
}

