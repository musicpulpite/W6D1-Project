/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nlet Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\n\n\nfunction Asteroid(options) {\n  options.color = 'green';\n  options.radius = 40;\n  options.vel = Util.randomVec(1);\n\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.moving_object = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nwindow.asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nwindow.game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nwindow.util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nwindow.game_view = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\")\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvasEl = document.getElementById('game-canvas');\n  const ctx = canvasEl.getContext('2d');\n  new window.game_view(ctx);\n});\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\n\nfunction Game (DIM_X, DIM_Y, NUM_ASTEROIDS) {\n  this.dim_x = DIM_X;\n  this.dim_y = DIM_Y;\n  this.num_asteroids = NUM_ASTEROIDS;\n  this.asteroids = [];\n  this.addAsteroids(this.num_asteroids);\n}\n\nGame.prototype.addAsteroids = function (num) {\n  for (let i = 0; i < num; i++) {\n    this.asteroids.push( new Asteroid( { pos: this.randomPosition() } ) );\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  return [this.dim_x * Math.random(), this.dim_y * Math.random()];\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.dim_x, this.dim_y);\n  this.asteroids.forEach((el) => {\n    el.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function() {\n  this.asteroids.forEach((el) => {\n    el.move();\n    this.wrap(el);\n  });\n};\n\nGame.prototype.wrap = function(el) {\n  if (el.pos[0] <= -el.radius) {\n    el.pos[0] = this.dim_x;\n  } else if (el.pos[0] >= this.dim_x + el.radius) {\n    el.pos[0] = 0;\n  } else if (el.pos[1] <= -el.radius) {\n    el.pos[1] = this.dim_y;\n  } else if (el.pos[1] >= this.dim_x + el.radius) {\n    el.pos[1] = 0;\n  }\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\")\n\nfunction gameView (ctx) {\n  this.game = new Game (1000, 1000, 1000);\n  this.ctx = ctx;\n\n  this.start(ctx);\n}\n\ngameView.prototype.start = function (ctx) {\n  setInterval(() => {\n    this.game.moveObjects();\n    this.game.draw(ctx);\n  }, 5);\n};\n\nmodule.exports = gameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (options) {\n  this.pos = options['pos'];\n  this.vel = options['vel'];\n  this.radius = options['radius'];\n  this.color = options['color'];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(child, parent) {\n    function Surrogate() {}\n    Surrogate.prototype = parent.prototype;\n    child.prototype = new Surrogate();\n    child.prototype.constructor = child;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n    // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n  //\n  // canvasEl() {\n  //   const canvasEl = document.getElementById('game-canvas');\n  //   return canvasEl;\n  // },\n  //\n  // context(canvasEl) {\n  //   const ctx = canvasEl.getContext('2d');\n  //   return ctx;\n  // }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });