/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
    Game   = require(process.cwd() + '/lib/Game');

describe('Game', function() {
  describe('init', function() {
    it('should create an object', function() {
      var game = new Game();
      expect(game).to.exist();
    });
    it('should accept a number and create players', function() {
      var game = new Game(4);
      expect(game.players.length).to.be.above(0);
    });
  });
});
