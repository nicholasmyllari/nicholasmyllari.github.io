var menuState = {
    
    create: function () {
        var nameLabel = game.add.text(80, 80, 'The Nuclear game', {
            font: '25px Arial', fill: '#ffffff', align: 'center' });
        
        var startLabel = game.add.text(80, game.world.height-240, 'Collect the atoms to keep the CO2 levels down.', 
        {font: '25px Arial', fill: '#ffffff'});
        var startLabel2 = game.add.text(80, game.world.height-180, 'Avoid collecting coal. When the CO2 levels reach a value', 
        {font: '25px Arial', fill: '#ffffff'});
        var startLabel3 = game.add.text(80, game.world.height-120, 'of 4000, you will lose the game. up to jump, and up again', 
        {font: '25px Arial', fill: '#ffffff'});
        var startLabel4 = game.add.text(80, game.world.height-60, 'in the air to doublejump. Press the up to start', 
        {font: '25px Arial', fill: '#ffffff'});

        cursors = game.input.keyboard.createCursorKeys();
        cursors.up.onDown.addOnce(this.start, this);
    },
        start: function() {
            game.state.start('play'); 
        }
      
    } 

