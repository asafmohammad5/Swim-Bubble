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
    this.muteToggle = this.muteToggle.bind(this);
    this.gameAbout = document.getElementById('game-about');
    this.gameRestart = document.getElementById('game-restart');
    const gameButton = document.getElementById('game-button');
    const restartButton = document.getElementById('game-button-1');
    this.musicButton = document.getElementById('mute-button')
    gameButton.addEventListener('click', (e) => {
      this.select.play();
      this.begin();
      this.start();
      this.gameAbout.className = 'hidden';
    })
    restartButton.addEventListener('click', (e) => {
      this.select.play();
      this.begin();
      this.start();
      this.gameRestart.className = 'hidden';
    })
    this.musicButton.addEventListener('click', (e) => {
      this.select.play();
      this.muteToggle()
    })
    this.begin();
    this.frame(); 
    this.mutedMusic = false;
    this.createSounds();
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
      this.gameOver.play();
      this.gameRestart.className = 'game-restart';
      this.lives = 3
    } else if (this.lives === 0) {
      this.playing = false;
      this.gameOver.play();
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
    if (!this.mutedMusic) {
      this.gameMusic.volume = 0.3;
      this.gameMusic.play();
    }
    this.frame();
  };

  click () {
    if (this.playing) {
      this.swimmer.swim();
      this.swim.play();
    }
  }

  createSounds () {
    this.gameMusic = new Audio('./assets/sounds/game-music.wav');
    this.select = new Audio('./assets/sounds/select.wav');
    this.swim = new Audio('./assets/sounds/swim.wav');
    this.gameOver = new Audio('./assets/sounds/game-over.wav')
    this.gameMusic.loop = true;
  }

  muteToggle (e) {
    if (this.mutedMusic) {
      this.musicButton.className = 'music-button';
      this.mutedMusic = false;
      if (this.playing) {
        this.gameMusic.volume = 0.3;
        this.gameMusic.play();
      }
    } else {
      this.musicButton.className = 'muted';
      this.mutedMusic = true;
      this.gameMusic.pause();
    }
    return this.mutedMusic
  };
}