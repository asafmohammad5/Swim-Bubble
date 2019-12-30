import Level from './level';
import Swimmer from './swimmer';

export default class SwimBubble{
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.begin();
  }

  begin() {
    this.level = new Level(this.dimensions);
    this.swimmer = new Swimmer(this.dimensions);
    this.start();
  }

  frame () {
    this.level.frame(this.ctx);
    this.swimmer.frame(this.ctx);
  }

  start() {
    this.running = true;
    this.frame();
  };
}