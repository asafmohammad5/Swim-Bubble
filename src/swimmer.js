const CONSTANTS = {
  PULL: 0.5,
  SWIMMER_HEIGHT: 35,
  SWIMMER_WIDTH: 45
  
};

export default class Swimmer {
  constructor(dimensions) {
    this.speed = 0;
    this.dimensions = dimensions;
    this.y = this.dimensions.height / 2.1;
    this.x = this.dimensions.width / 3;
  }

  drawSwimmer(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, CONSTANTS.SWIMMER_WIDTH, CONSTANTS.SWIMMER_HEIGHT)
  }

  frame(ctx) {
    this.drawSwimmer(ctx)
  }

}
