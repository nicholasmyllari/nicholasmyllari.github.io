var gameOverState = {
    
    create: function() {

       var gameOverLabel = game.add.text(80, 80, '\nGAME OVER\nPress the up key to restart\n You earned ' + points +' points!', {font: '25px Arial', fill: '#ffffff', align: 'center'});
       cursors = game.input.keyboard.createCursorKeys();
       cursors.up.onDown.addOnce(this.restart, this);
    },
    restart: function () {
        game.state.start('menu');

}
};
  

