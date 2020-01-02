const CONSTANTS = {
  BUBBLE_SPEED: -1,
  BUBBLE_DISTANCE: 270,
  BUBBLE_WIDTH: 28
}

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.score = 0;
    this.coral = new Image();
    this.coral.src = './assets/images/coral.png'
    this.bubbles = [ { x: (CONSTANTS.BUBBLE_DISTANCE * 4), y: this.bubblePosition() },
      { x: (CONSTANTS.BUBBLE_DISTANCE * 5), y: this.bubblePosition() },
      { x: (CONSTANTS.BUBBLE_DISTANCE * 6), y: this.bubblePosition() } ];
    this.smallBubbles = [ {x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY() }, 
      { x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY()}, 
      { x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY() }, 
      { x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY()},
      { x: (this.bubblePositionX()), y: this.dimensions.height + this.bubblePositionY() } ];
  };

  gotBubble(bounds) {
    let bubble = this.bubbles[0];
    if (bubble.x >= bounds.tLeft[0] - 25 && bubble.x <= bounds.bRight[0] + 25 && bubble.y >= bounds.tLeft[1] - 25 && bubble.y <= bounds.bRight[1] + 25) {
      this.removeBubble();
      this.score += 25;
    } else if (bubble.x + (this.dimensions.width/4) + 28 < bounds.tLeft[0]) {
      return false;
    } else if (bounds.bRight[1] <= 20 || bounds.bRight[1] >= 740) {
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
    ctx.drawImage(
      this.coral,
      0,
      700,
      100,
      100
    );
    ctx.drawImage(
      this.coral,
      100,
      700,
      100,
      100
    );
    ctx.drawImage(
      this.coral,
      200,
      700,
      100,
      100
    );
    ctx.drawImage(
      this.coral,
      300,
      700,
      100,
      100
    ); 
    ctx.drawImage(
      this.coral,
      400,
      700,
      100,
      100
    );
    ctx.drawImage(
      this.coral,
      500,
      700,
      100,
      100
    );
    ctx.drawImage(
      this.coral,
      600,
      700,
      100,
      100
    );
    ctx.drawImage(
      this.coral,
      700,
      700,
      100,
      100
    );
    ctx.drawImage(
      this.coral,
      800,
      700,
      100,
      100
    );
    ctx.drawImage(
      this.coral,
      900,
      700,
      100,
      100
    );
  }

  frame(ctx) {
    this.moveBubble();
    this.moveBubbles()
    this.drawBackground(ctx);
    ctx.fillStyle = "white";
    ctx.font = "bold 22px Arial";
    ctx.fillText(`Score: ${this.score}`, (this.dimensions.width / 1.15), (this.dimensions.height / 20));
    this.drawBubble(ctx);
    this.drawSmallBubble(ctx);
   
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

  moveBubbles() {
    for (let i = 0; i < this.smallBubbles.length; i++) {
      const bubble = this.smallBubbles[i];
      if (bubble.y < 0 - 8) {
        let endBubble = this.smallBubbles.shift();
        endBubble.y = this.dimensions.height + this.bubblePositionY();
        endBubble.x = this.bubblePositionX();
        this.smallBubbles.push(endBubble);
      }
      bubble.y += CONSTANTS.BUBBLE_SPEED * 2.5;
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

  drawSmallBubble(ctx) {
    for (let i = 0; i < this.smallBubbles.length; i++) {
      const bubble = this.smallBubbles[i];
      if (bubble.y < this.dimensions.height) {
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, 8, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(0, 0, 0, 0)`;
        ctx.fill();
        ctx.strokeStyle = `#FFFFFF`;
        ctx.stroke();
      }
    }
  };

  bubblePosition() {
    let num = Math.floor(Math.random() * 800);
    while (num < 100 || num > 702) {
      num = Math.floor(Math.random() * 800);
    }
    return num;
  }

  bubblePositionX() {
    let num = Math.floor(Math.random() * 1000);
    while (num < 25 || num > 975) {
      num = Math.floor(Math.random() * 1000);
    }
    return num;
  }

  bubblePositionY() {
    let num = Math.floor(Math.random() * 200);
    while (num < 25 || num > 180) {
      num = Math.floor(Math.random() * 200);
    }
    return num;
  }
}