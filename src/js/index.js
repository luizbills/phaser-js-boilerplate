/* ever use index.js to entry file */
'use strict';

var Phaser = require('Phaser'),
  game;

game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', {

  create: function() {
    game.add.sprite(0, 0, 'test');
  }

});
