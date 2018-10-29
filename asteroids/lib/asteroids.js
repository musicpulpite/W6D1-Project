window.moving_object = require("./moving_object.js");
window.asteroid = require("./asteroid.js");
window.game = require("./game.js");
window.util = require("./utils.js");
window.game_view = require("./game_view.js")



document.addEventListener('DOMContentLoaded', () => {
  const canvasEl = document.getElementById('game-canvas');
  const ctx = canvasEl.getContext('2d');
  new window.game_view(ctx);
});
