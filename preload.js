var preloadState = {
    preload: function () {
    game.load.image('CoalSprite', 'Sprites/CoalSprite.png');
    game.load.image('gem', 'Sprites/gem.png');
 	game.load.spritesheet('jumpUp', 'Sprites/jumpUp.png', 33, 50);
    game.load.spritesheet('fallDown', 'Sprites/fallDown.png', 35, 47);
    game.load.spritesheet('dude', 'Sprites/run.png', 34, 48);
    game.load.spritesheet('grassyGround', 'Sprites/grassAnimation.png', 67, 76);
    game.load.image('sky', 'Sprites/sky.png');
    game.load.image('ground', 'Sprites/ground.png');
    game.load.image('meter', 'Sprites/healthBar.png');
    
    game.load.audio('coalSound', 'Sounds/coalSound.mp3');
    game.load.audio('emeraldSound', 'Sounds/emeraldSound.mp3');
    game.load.audio('backgroundMusic', 'Sounds/backgroundMusic.mp3');
    game.load.audio('jump', 'Sounds/jump.mp3');

        
},

create: function() {
    game.state.start('menu');
}
}