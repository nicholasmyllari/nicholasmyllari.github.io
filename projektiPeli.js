var game = new Phaser.Game(804, 600, Phaser.AUTO, '', {/*preload: preload, create: create, update: update*/ });

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('gameOver', gameOverState);

game.state.start('boot'); 

var coals;
var emeralds;
var platforms;
var platforms2;
var player;
var textureTimer;
var coalMeter;
var doubleJump;
var jumpTimer;



/*variables for sounds*/
var jump;
var collision;
var collect; 
var music;


//variables for spawning of coals and emeralds
var time_til_spawnC = 20000;
var time_til_spawnE = 20000;
var last_spawn_timeC = 0;
var last_spawn_timeE = 0;


function spawnCoal() {
 	var coal = coals.create(900, Math.random()*200+300, 'CoalSprite')
 	coal.body.velocity.x = -150;
 	coal.scale.setTo(0.5,0.5);
};

function spawnEmerald() {
	var emerald = emeralds.create(900, Math.random()*200+300, 'gem')
	emerald.body.velocity.x = -150;
	emerald.scale.setTo(0.5,0.5);
};

function collectCoal(player, coal) {
	coal.kill();
    collision = game.add.audio('coalSound');
    collision.play();
    coalMeter = coalMeter + 1000;
    if (coalMeter >= 4000) {
        game.state.start('gameOver');
    }
};

    
function collectEmerald(player, emerald) {
	emerald.kill();
    collect = game.add.audio('emeraldSound');
    collect.play();
    coalMeter = Math.max(coalMeter - 600,0);
    
};
    


