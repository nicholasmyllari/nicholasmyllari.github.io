var playState = {
    
create: function() {    
    //background
    game.add.sprite(0, 0, 'sky');
    //the player and it's physics
    player = game.add.sprite(32, game.world.height - 120, 'dude');
    game.physics.arcade.enable(player);
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('walk', [0,1,2,3,4]);
    player.animations.play('walk', 20, true);
    textureTimer = 2;

    //storage for the coals and emeralds
    coals = game.add.group();
	coals.enableBody = true;
	emeralds = game.add.group();
	emeralds.enableBody = true;
    
    // coalMeter for the life counter
    points = 0
    coalMeter = 0;
    coalText = game.add.text(500, 60 , 'CO2 Level' + coalMeter, { font: "25px arial", fill: "#FFFFFF", align: "left" });

    //ground that the player walks on
    platforms = game.add.group();
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 57, 'ground');
    ground.body.immovable = true;

    platforms2 = game.add.group();
    platforms2.enableBody = true;
    var ground2 = platforms2.create(0, game.world.height - 49, 'ground');
    ground2.body.immovable = true;

    //moving animation on top of the ground that the player runs on
    for (var i = 12; i >= 0; i--) {
    grass = game.add.sprite(i * 67, game.world.height - 67, 'grassyGround');
    grass.scale.x *= -1;
    grass.animations.add('move');
    grass.animations.play('move', 12, true);
    };

    jump = game.add.audio('jump');
    music = game.add.audio('backgroundMusic');
    music.play();
},
    
    update: function() {

    //  Collide the player with the platform
    /*if (!cursors.down.isDown)*/var hitPlatform = game.physics.arcade.collide(player, platforms);
    var hitPlatform2 = game.physics.arcade.collide(player, platforms2);
    //animation for the player
	if (player.body.velocity.y < 0) {
		player.loadTexture('jumpUp', 0, false);
    } else if (player.body.velocity.y > 0) {
    	player.loadTexture('fallDown');
    } else {
        if(textureTimer == 0){
            player.loadTexture('dude');
            player.animations.play('walk', 20, true);
            doubleJump = 0;
        };
        
        textureTimer = Math.max(-1, textureTimer - 1);
    };

    //controls
    cursors = game.input.keyboard.createCursorKeys();
    if (cursors.up.isDown && player.body.touching.down && hitPlatform) { //jump
        player.body.velocity.y = -350;
        jump.play();
        textureTimer = 9;
        jumpTimer = 0;
    } else if (cursors.up.isDown && doubleJump == 0 && jumpTimer > 15) { //double jump
        jump.play();
        player.body.velocity.y = -250;
        doubleJump = 1;
    };
    jumpTimer++;
    //spawn enemies
    var current_time = game.time.time;
    if(current_time - last_spawn_timeC > time_til_spawnC) {
    time_til_spawnC = Math.random()*700 + 400;
    last_spawn_timeC = current_time;
    spawnCoal();
    }
    coalMeter ++;
    points ++;
    if(current_time - last_spawn_timeE > time_til_spawnE) {
    time_til_spawnE = Math.random()*3000 + 100;
    last_spawn_timeE = current_time;
    spawnEmerald();
    points = points + 200;
    }
    game.physics.arcade.overlap(player, coals, collectCoal, null, this);
         if (coalMeter >= 4000) {              
            game.state.start('gameOver');

    }
    game.physics.arcade.overlap(player, emeralds, collectEmerald, null, this);

    coalText.text = 'CO2 Level is : ' + coalMeter;
    if (coalMeter > 4000) {
        game.state.start('gameOver');
    };
        
},
    gameOver: function() {
        game.state.start('gameOver');
    }
    
};



    
    
    

    
    
    

