const CONSTANTS = {
  BUBBLE_SPEED: -1,
  BUBBLE_DISTANCE: 270,
  BUBBLE_WIDTH: 28
}

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.score = 0;
    this.bubbles = [ { x: (CONSTANTS.BUBBLE_DISTANCE * 4), y: this.bubblePosition() },
      { x: (CONSTANTS.BUBBLE_DISTANCE * 5), y: this.bubblePosition() },
      { x: (CONSTANTS.BUBBLE_DISTANCE * 6), y: this.bubblePosition() } ];
  }

  gotBubble(bounds) {
    let bubble = this.bubbles[0];
    if (bubble.x >= bounds.tLeft[0] - 25 && bubble.x <= bounds.bRight[0] + 25 && bubble.y >= bounds.tLeft[1] - 25 && bubble.y <= bounds.bRight[1] + 25) {
      this.removeBubble();
      this.score += 25;
    } else if (bubble.x + (this.dimensions.width/4) + 28 < bounds.tLeft[0]) {
      return false;
    } else if (bounds.bRight[1] <= 20 || bounds.bRight[1] >= 778) {
      return -1
    }
  };

  removeBubble () {
    let bubble = this.bubbles.shift();
    bubble.x = this.bubbles[1].x + CONSTANTS.BUBBLE_DISTANCE * 1.8;
    bubble.y = this.bubblePosition();
    this.bubbles.push(bubble);
  }

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
    ctx.fillStyle = "white";
    ctx.font = "bold 22px Arial";
    ctx.fillText(`Score: ${this.score}`, (this.dimensions.width / 1.15), (this.dimensions.height / 20));
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
        ctx.fillStyle = `rgba(0, 0, 0, 0)`;
        ctx.fill();
        ctx.strokeStyle = `#FFFFFF`;
        ctx.stroke();
       }
    }
  };

  bubblePosition() {
    let num = Math.floor(Math.random() * 800);
    while (num < 100 || num > 740) {
      num = Math.floor(Math.random() * 800);
    }
    return num;
  }
}