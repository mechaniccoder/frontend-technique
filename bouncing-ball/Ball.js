export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    this.x = 2 * radius + Math.random() * (stageWidth - 2 * radius);
    this.y = 2 * radius + Math.random() * (stageHeight - 2 * radius);
  }

  draw(ctx, stageWidth, stageHeight, block) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);
    this.bounceBlock(block);

    ctx.fillStyle = "#fdd700";
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (minX > this.x || this.x > maxX) {
      this.vx *= -1;
      this.x += this.vx;
    }

    if (minY > this.y || this.y > maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  bounceBlock(block) {
    const minX = block.x - this.radius;
    const maxX = block.maxX + this.radius;
    const minY = block.y - this.radius;
    const maxY = block.maxY + this.radius;

    if (this.x < minX || this.x > maxX) {
      this.vx *= -1;
    }

    if (this.y < minY || this.y > maxY) {
      this.vx *= -1;
    }
  }
}
