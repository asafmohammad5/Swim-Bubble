import Level from './level';
import Swimmer from './swimmer';

export default class SwimBubble{
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.lives = 3;
    canvas.addEventListener('click', this.click.bind(this));
    this.begin();
  }

  begin() {
    this.level = new Level(this.dimensions);
    this.swimmer = new Swimmer(this.dimensions);
    this.start();
  }

  frame () {
    this.level.frame(this.ctx);
    this.ctx.fillStyle = "white";
    this.ctx.font = "bold 23px Arial";
    this.ctx.fillText(`Breathe: ${this.lives}`, (this.dimensions.width / 33), (this.dimensions.height / 20));
    this.swimmer.frame(this.ctx);
    
    if (this.level.gotBubble(this.swimmer.swimmerBoundaries()) === -1 ) {
      alert('you lose')
      this.begin();
    } else if (this.lives === 0) {
      alert('you lose')
      this.lives = 3;
      this.begin();
    } else if (this.level.gotBubble(this.swimmer.swimmerBoundaries()) === false ) {
      this.lives = this.lives - 1
    }
    if (this.playing) {
      requestAnimationFrame(this.frame.bind(this));
    }
  }

  start() {
    this.playing = true;
    this.frame();
  };

  click () {
    if (!this.playing) {
      this.start();
    }
    this.swimmer.swim();
  }
}