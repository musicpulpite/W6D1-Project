let MovingObject = require('./moving_object.js');
let Util = require('./utils.js');


function Asteroid(options) {
  options.color = 'green';
  options.radius = 40;
  options.vel = Util.randomVec(1);

  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
