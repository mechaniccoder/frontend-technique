import {Ball} from "./Ball.js";
import {Block} from "./Block.js";

class App {
  constructor() {
    this.app = document.getElementById("app");
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.app.appendChild(this.canvas);

    window.addEventListener("resize", () => this.resize);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
    this.block = new Block(300, 30, 300, 450);

    requestAnimationFrame(() => this.animate());
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = 2 * this.stageWidth;
    this.canvas.height = 2 * this.stageHeight;
    this.ctx.scale(2, 2);
  }

  animate() {
    this.ball.draw(this.ctx, this.stageWidth, this., this.block);
    this.block.draw(this.ctx);
    requestAnimationFrame(() => this.animate());
  }
}

window.onload = () => {
  new App();
};
