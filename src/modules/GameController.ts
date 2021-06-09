import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameController {
  food: Food;
  scorePanel: ScorePanel;
  snake: Snake;

  direction: string = "";
  alive: boolean = true;

  constructor() {
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();
    this.init();
  }

  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(e: KeyboardEvent) {
    this.direction = e.key;
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    this.checkEatFood(X, Y);

    // 撞墙检测
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      this.alive = false;
      alert(e.message);
    }

    if (this.alive) {
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
  }

  // 吃食物检测
  checkEatFood(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.randomPosition();
      this.snake.addBody();
      this.scorePanel.addScore();
    }
  }
}

export default GameController;
