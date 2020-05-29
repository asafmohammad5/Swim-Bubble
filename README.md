# Swim-Bubble

An interactive game where the player must get air bubbles in order to keep themselves from drowning!

[Live Link](https://swimbubble.netlify.app/)


## How to play

The player gets 3 lives when the game starts (extra lives are awarded based on score). They must click on the screen in order to move up and avoid clicking to move down. The player will want to move up or down in order to get air bubbles that are coming their way. As the players score increases, the game gets harder. If their lives get to 0, or if they go to far up/down, this will result in a loss and they will have to start over. 

## Technologies 
* Javascript
* Canvas
* HTML/CSS


## Wireframes
* Swimmer (dolphin)
* Water (canvas)
* Air bubbles
* Small air bubbles (background purposes)
* Number of lives
* Score
* Coral (background purposes)


## Game Screenshots
![GitHub Logo](/assets/images/swimbubble-main.png)
![GitHub Logo](/assets/images/swimbubble-game.png)


## Game Sample Code 

```
frame () {
    this.level.frame(this.ctx);
    this.ctx.fillStyle = "white";
    this.ctx.font = "bold 23px Arial";
    this.ctx.fillText(`Breathe: ${this.lives}`, (this.dimensions.width / 33), (this.dimensions.height / 20));
    this.swimmer.frame(this.ctx);
    if (SCORE_ARRAY.includes(this.level.score)) {
      SCORE_ARRAY.shift();
      this.addLife();
    } 
    
    if (this.level.gotBubble(this.swimmer.swimmerBoundaries()) === -1 ) {
      this.playing = false;
      this.gameMusic.pause();
      this.gameOver.play();
      this.pauseDiv.className = 'hidden';
      this.gameRestart.className = 'game-restart';
      this.lives = 3
    } else if (this.lives === 0) {
      this.playing = false;
      this.gameMusic.pause();
      this.gameOver.play();
      this.pauseDiv.className = 'hidden';
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
```


