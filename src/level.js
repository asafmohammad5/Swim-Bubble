const CONSTANTS = {
  BUBBLE_SPEED: -1,
  BUBBLE_DISTANCE: 280,
  BUBBLE_WIDTH: 30
}


export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.bubbles = [ { x: (CONSTANTS.BUBBLE_DISTANCE * 4), y: this.bubblePosition() },
      { x: (CONSTANTS.BUBBLE_DISTANCE * 5), y: this.bubblePosition() },
      { x: (CONSTANTS.BUBBLE_DISTANCE * 6), y: this.bubblePosition() } ];
  }

  gotBubble(bounds) {
    let bubble = this.bubbles[0];
    if (bubble.y === bounds.bRight[1] || bubble.x === bounds.bRight[0]) {
      return true;
    } else if (bubble.y === bounds.tLeft[1] || bubble.x === bounds.tLeft[0]) {
      return true;
    } else if (bubble.x + (this.dimensions.width/4) + 30 < bounds.tLeft[0]) {
      return false;
    } else if (bounds.bRight[1] <= 20 || bounds.bRight[1] >= 778) {
      return -1
    }
  };

  drawBackground(ctx) {
    const grd = ctx.createLinearGradient(30, 700, -30, -230);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  frame(ctx) {
   
    this.moveBubble();
    this.drawBackground(ctx);
    this.drawBubble(ctx);
    
  }

  moveBubble() {
    for (let i = 0; i < this.bubbles.length; i++) {
      const bubble = this.bubbles[i];

      if (bubble.x < 0 - CONSTANTS.BUBBLE_WIDTH) {
        let endBubble = this.bubbles.shift();
        endBubble.x = this.bubbles[1].x + CONSTANTS.BUBBLE_DISTANCE*1.8;
        endBubble.y = this.bubblePosition();
        this.bubbles.push(endBubble);
      }
      bubble.x += CONSTANTS.BUBBLE_SPEED;
    }
  };

  drawBubble(ctx) {
    for (let i = 0; i < this.bubbles.length; i++) {
      const bubble = this.bubbles[i];
      if (bubble.x < this.dimensions.width) {
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, CONSTANTS.BUBBLE_WIDTH, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
      }
    }
  };

  bubblePosition() {
    let num = Math.floor(Math.random() * 800);
    while (num < 100 || num > 760) {
      num = Math.floor(Math.random() * 800);
    }
    return num;
  }
}