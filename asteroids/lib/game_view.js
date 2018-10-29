let Game = require("./game.js")

function gameView (ctx) {
  this.game = new Game (1000, 1000, 1000);
  this.ctx = ctx;

  this.start(ctx);
}

gameView.prototype.start = function (ctx) {
  setInterval(() => {
    this.game.moveObjects();
    this.game.draw(ctx);
  }, 5);
};

module.exports = gameView;
