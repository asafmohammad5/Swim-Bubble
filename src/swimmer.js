const CONSTANTS = {
  PULL: .016,
  SWIMMER_HEIGHT: 35,
  SWIMMER_WIDTH: 45,
  SWIM_SPEED: -1.7
};

export default class Swimmer {
  constructor(dimensions) {
    this.speed = CONSTANTS.PULL;
    this.dimensions = dimensions;
    this.y = this.dimensions.height / 2.2;
    this.x = this.dimensions.width / 4;
  }

  swimmerBoundaries() {
    const leftCornerTop = [this.x, this.y];
    const rightCornerBottom = [this.x + CONSTANTS.SWIMMER_WIDTH, this.y + CONSTANTS.SWIMMER_HEIGHT]
    return { tLeft: leftCornerTop, bRight: rightCornerBottom  };
  }

  drawSwimmer(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, CONSTANTS.SWIMMER_WIDTH, CONSTANTS.SWIMMER_HEIGHT)
  }

  frame(ctx) {
    this.move();
    this.drawSwimmer(ctx)
  }

  move () {
    this.y += this.speed;
    this.speed += CONSTANTS.PULL
  }

  swim() {
    this.speed = CONSTANTS.SWIM_SPEED;
  };

}
