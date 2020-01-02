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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SwimBubble; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _swimmer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swimmer */ \"./src/swimmer.js\");\n\n\n\nclass SwimBubble{\n  constructor(canvas) {\n    this.playing = false;\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.lives = 3;\n    canvas.addEventListener('click', this.click.bind(this));\n    this.start = this.start.bind(this);\n    this.begin = this.begin.bind(this);\n    this.gameAbout = document.getElementById('game-about');\n    this.gameRestart = document.getElementById('game-restart');\n    const gameButton = document.getElementById('game-button');\n    const restartButton = document.getElementById('game-button-1');\n    gameButton.addEventListener('click', (e) => {\n      this.begin();\n      this.start();\n      this.gameAbout.className = 'hidden';\n    })\n    restartButton.addEventListener('click', (e) => {\n      this.begin();\n      this.start();\n      this.gameRestart.className = 'hidden';\n    })\n    this.begin();\n    this.frame(); \n  }\n\n  begin() {\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.swimmer = new _swimmer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n  }\n\n  frame () {\n    this.level.frame(this.ctx);\n    this.ctx.fillStyle = \"white\";\n    this.ctx.font = \"bold 23px Arial\";\n    this.ctx.fillText(`Breathe: ${this.lives}`, (this.dimensions.width / 33), (this.dimensions.height / 20));\n    this.swimmer.frame(this.ctx);\n    \n    if (this.level.gotBubble(this.swimmer.swimmerBoundaries()) === -1 ) {\n      this.playing = false;\n      this.gameRestart.className = 'game-restart';\n      this.lives = 3\n    } else if (this.lives === 0) {\n      this.playing = false;\n      this.gameRestart.className = 'game-restart';\n      this.lives = 3\n    } else if (this.level.gotBubble(this.swimmer.swimmerBoundaries()) === false ) {\n      this.lives = this.lives - 1\n    }\n    if (this.playing) {\n      if (this.animationFrame) {\n        cancelAnimationFrame(this.animationFrame)\n      }\n      this.animationFrame = requestAnimationFrame(this.frame.bind(this));  \n    }\n  }\n\n  start() {\n    this.playing = true;\n    this.frame();\n  };\n\n  click () {\n    this.swimmer.swim();\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById('game');\n  new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  BUBBLE_SPEED: -1,\n  BUBBLE_DISTANCE: 270,\n  BUBBLE_WIDTH: 28\n}\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.score = 0;\n    this.coral = new Image();\n    this.coral.src = './assets/images/coral.png'\n    this.bubbles = [ { x: (CONSTANTS.BUBBLE_DISTANCE * 4), y: this.bubblePosition() },\n      { x: (CONSTANTS.BUBBLE_DISTANCE * 5), y: this.bubblePosition() },\n      { x: (CONSTANTS.BUBBLE_DISTANCE * 6), y: this.bubblePosition() } ];\n    this.smallBubbles = [ {x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY() }, \n      { x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY()}, \n      { x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY() }, \n      { x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY()},\n      { x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY() } ];\n  };\n\n  gotBubble(bounds) {\n    let bubble = this.bubbles[0];\n    if (bubble.x >= bounds.tLeft[0] - 25 && bubble.x <= bounds.bRight[0] + 25 && bubble.y >= bounds.tLeft[1] - 25 && bubble.y <= bounds.bRight[1] + 25) {\n      this.removeBubble();\n      this.score += 25;\n    } else if (bubble.x + (this.dimensions.width/4) + 28 < bounds.tLeft[0]) {\n      return false;\n    } else if (bounds.bRight[1] <= 20 || bounds.bRight[1] >= 740) {\n      return -1\n    }\n  };\n\n  removeBubble () {\n    let bubble = this.bubbles.shift();\n    bubble.x = this.bubbles[1].x + CONSTANTS.BUBBLE_DISTANCE * 1.8;\n    bubble.y = this.bubblePosition();\n    this.bubbles.push(bubble);\n  }\n\n  drawBackground(ctx) {\n    const grd = ctx.createLinearGradient(30, 700, -30, -230);\n    grd.addColorStop(0, \"blue\");\n    grd.addColorStop(1, \"white\");\n    ctx.fillStyle = grd;\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    ctx.drawImage(\n      this.coral,\n      0,\n      700,\n      100,\n      100\n    );\n    ctx.drawImage(\n      this.coral,\n      100,\n      700,\n      100,\n      100\n    );\n    ctx.drawImage(\n      this.coral,\n      200,\n      700,\n      100,\n      100\n    );\n    ctx.drawImage(\n      this.coral,\n      300,\n      700,\n      100,\n      100\n    ); \n    ctx.drawImage(\n      this.coral,\n      400,\n      700,\n      100,\n      100\n    );\n    ctx.drawImage(\n      this.coral,\n      500,\n      700,\n      100,\n      100\n    );\n    ctx.drawImage(\n      this.coral,\n      600,\n      700,\n      100,\n      100\n    );\n    ctx.drawImage(\n      this.coral,\n      700,\n      700,\n      100,\n      100\n    );\n    ctx.drawImage(\n      this.coral,\n      800,\n      700,\n      100,\n      100\n    );\n    ctx.drawImage(\n      this.coral,\n      900,\n      700,\n      100,\n      100\n    );\n  }\n\n  frame(ctx) {\n    this.moveBubble();\n    this.moveBubbles()\n    this.drawBackground(ctx);\n    ctx.fillStyle = \"white\";\n    ctx.font = \"bold 22px Arial\";\n    ctx.fillText(`Score: ${this.score}`, (this.dimensions.width / 1.15), (this.dimensions.height / 20));\n    this.drawBubble(ctx);\n    this.drawSmallBubble(ctx);\n   \n  }\n\n  moveBubble() {\n    for (let i = 0; i < this.bubbles.length; i++) {\n      const bubble = this.bubbles[i];\n      if (bubble.x < 0 - CONSTANTS.BUBBLE_WIDTH) {\n        let endBubble = this.bubbles.shift();\n        endBubble.x = this.bubbles[1].x + CONSTANTS.BUBBLE_DISTANCE*1.8;\n        endBubble.y = this.bubblePosition();\n        this.bubbles.push(endBubble);\n      }\n      bubble.x += CONSTANTS.BUBBLE_SPEED;\n    }\n  };\n\n  moveBubbles() {\n    for (let i = 0; i < this.smallBubbles.length; i++) {\n      const bubble = this.smallBubbles[i];\n      if (bubble.y < 0 - 8) {\n        let endBubble = this.smallBubbles.shift();\n        endBubble.y = this.dimensions.height + this.bubblePositionY();\n        endBubble.x = this.bubblePositionX();\n        this.smallBubbles.push(endBubble);\n      }\n      bubble.y += CONSTANTS.BUBBLE_SPEED * 2.5;\n    }\n  };\n\n  drawBubble(ctx) {\n    for (let i = 0; i < this.bubbles.length; i++) {\n      const bubble = this.bubbles[i];\n      if (bubble.x < this.dimensions.width) {\n        ctx.beginPath()\n        ctx.arc(bubble.x, bubble.y, CONSTANTS.BUBBLE_WIDTH, 0, 2 * Math.PI);\n        ctx.fillStyle = `rgba(0, 0, 0, 0)`;\n        ctx.fill();\n        ctx.strokeStyle = `#FFFFFF`;\n        ctx.stroke();\n       }\n    }\n  };\n\n  drawSmallBubble(ctx) {\n    for (let i = 0; i < this.smallBubbles.length; i++) {\n      const bubble = this.smallBubbles[i];\n      if (bubble.y < this.dimensions.height) {\n        ctx.beginPath()\n        ctx.arc(bubble.x, bubble.y, 8, 0, 2 * Math.PI);\n        ctx.fillStyle = `rgba(0, 0, 0, 0)`;\n        ctx.fill();\n        ctx.strokeStyle = `#FFFFFF`;\n        ctx.stroke();\n      }\n    }\n  };\n\n  bubblePosition() {\n    let num = Math.floor(Math.random() * 800);\n    while (num < 100 || num > 702) {\n      num = Math.floor(Math.random() * 800);\n    }\n    return num;\n  }\n\n  bubblePositionX() {\n    let num = Math.floor(Math.random() * 1000);\n    while (num < 25 || num > 975) {\n      num = Math.floor(Math.random() * 1000);\n    }\n    return num;\n  }\n\n  bubblePositionY() {\n    let num = Math.floor(Math.random() * 200);\n    while (num < 25 || num > 180) {\n      num = Math.floor(Math.random() * 200);\n    }\n    return num;\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/swimmer.js":
/*!************************!*\
  !*** ./src/swimmer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Swimmer; });\nconst CONSTANTS = {\n  PULL: .016,\n  SWIMMER_HEIGHT: 60,\n  SWIMMER_WIDTH: 60,\n  SWIM_SPEED: -1.7\n};\n\nclass Swimmer {\n  constructor(dimensions) {\n    this.speed = CONSTANTS.PULL;\n    this.dimensions = dimensions;\n    this.y = this.dimensions.height / 2.2;\n    this.x = this.dimensions.width / 4;\n    this.swimmer = new Image();\n    this.swimmer.src = './assets/images/dolphin.png';\n  }\n\n  swimmerBoundaries() {\n    const leftCornerTop = [this.x, this.y];\n    const rightCornerBottom = [this.x + CONSTANTS.SWIMMER_WIDTH, this.y + CONSTANTS.SWIMMER_HEIGHT]\n    return { tLeft: leftCornerTop, bRight: rightCornerBottom  };\n  }\n\n  drawSwimmer(ctx) {\n    ctx.clearRect(0, 0, 0, 0);\n    ctx.drawImage(\n      this.swimmer,\n      this.x,\n      this.y,\n      80,\n      80\n    );\n\n  }\n\n  frame(ctx) {\n    this.move();\n    this.drawSwimmer(ctx)\n  }\n\n  move () {\n    this.y += this.speed;\n    this.speed += CONSTANTS.PULL\n  }\n\n  swim() {\n    this.speed = CONSTANTS.SWIM_SPEED;\n  };\n\n}\n\n\n//# sourceURL=webpack:///./src/swimmer.js?");

/***/ })

/******/ });