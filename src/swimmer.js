const CONSTANTS = {
  PULL: .016,
  SWIMMER_HEIGHT: 60,
  SWIMMER_WIDTH: 60,
  SWIM_SPEED: -1.7
};

export default class Swimmer {
  constructor(dimensions) {
    this.speed = CONSTANTS.PULL;
    this.dimensions = dimensions;
    this.y = this.dimensions.height / 2.2;
    this.x = this.dimensions.width / 4;
    this.swimmer = new Image();
    this.swimmer.src = './assets/images/dolphin.png';
  }

  swimmerBoundaries() {
    const leftCornerTop = [this.x, this.y];
    const rightCornerBottom = [this.x + CONSTANTS.SWIMMER_WIDTH, this.y + CONSTANTS.SWIMMER_HEIGHT]
    return { tLeft: leftCornerTop, bRight: rightCornerBottom  };
  }

  drawSwimmer(ctx) {
    ctx.clearRect(0, 0, 0, 0);
    ctx.drawImage(
      this.swimmer,
      this.x,
      this.y,
      80,
      80
    );

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
