export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
   
  }


  drawBackground(ctx) {
    const grd = ctx.createLinearGradient(30, 700, -30, -230);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  frame(ctx) {
    this.drawBackground(ctx);
  }
}