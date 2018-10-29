let Asteroid = require('./asteroid.js');

function Game (DIM_X, DIM_Y, NUM_ASTEROIDS) {
  this.dim_x = DIM_X;
  this.dim_y = DIM_Y;
  this.num_asteroids = NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids(this.num_asteroids);
}

Game.prototype.addAsteroids = function (num) {
  for (let i = 0; i < num; i++) {
    this.asteroids.push( new Asteroid( { pos: this.randomPosition() } ) );
  }
};

Game.prototype.randomPosition = function() {
  return [this.dim_x * Math.random(), this.dim_y * Math.random()];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.dim_x, this.dim_y);
  this.asteroids.forEach((el) => {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((el) => {
    el.move();
    this.wrap(el);
  });
};

Game.prototype.wrap = function(el) {
  if (el.pos[0] <= -el.radius) {
    el.pos[0] = this.dim_x;
  } else if (el.pos[0] >= this.dim_x + el.radius) {
    el.pos[0] = 0;
  } else if (el.pos[1] <= -el.radius) {
    el.pos[1] = this.dim_y;
  } else if (el.pos[1] >= this.dim_x + el.radius) {
    el.pos[1] = 0;
  }
};

module.exports = Game;
