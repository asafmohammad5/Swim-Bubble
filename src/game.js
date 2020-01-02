import Level from './level';
import Swimmer from './swimmer';

export default class SwimBubble{
  constructor(canvas) {
    this.playing = false;
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.lives = 3;
    canvas.addEventListener('click', this.click.bind(this));
    this.start = this.start.bind(this);
    this.begin = this.begin.bind(this);
    this.gameAbout = document.getElementById('game-about');
    this.gameRestart = document.getElementById('game-restart');
    const gameButton = document.getElementById('game-button');
    const restartButton = document.getElementById('game-button-1');
    gameButton.addEventListener('click', (e) => {
      this.begin();
      this.start();
      this.gameAbout.className = 'hidden';
    })
    restartButton.addEventListener('click', (e) => {
      this.begin();
      this.start();
      this.gameRestart.className = 'hidden';
    })
    this.begin();
    this.frame(); 
  }

  begin() {
    this.level = new Level(this.dimensions);
    this.swimmer = new Swimmer(this.dimensions);
  }

  frame () {
    this.level.frame(this.ctx);
    this.ctx.fillStyle = "white";
    this.ctx.font = "bold 23px Arial";
    this.ctx.fillText(`Breathe: ${this.lives}`, (this.dimensions.width / 33), (this.dimensions.height / 20));
    this.swimmer.frame(this.ctx);
    
    if (this.level.gotBubble(this.swimmer.swimmerBoundaries()) === -1 ) {
      this.playing = false;
      this.gameRestart.className = 'game-restart';
      this.lives = 3
    } else if (this.lives === 0) {
      this.playing = false;
      this.gameRestart.className = 'game-restart';
      this.lives = 3
    } else if (this.level.gotBubble(this.swimmer.swimmerBoundaries()) === false ) {
      this.lives = this.lives - 1
    }
    if (this.playing) {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame)
      }
      this.animationFrame = requestAnimationFrame(this.frame.bind(this));  
    }
  }

  start() {
    this.playing = true;
    this.frame();
  };

  click () {
    this.swimmer.swim();
  }
}