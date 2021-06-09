class Snake {
  snakeEle: HTMLElement;
  headEle: HTMLElement;
  bodiesEle: HTMLCollection;

  constructor() {
    this.snakeEle = document.querySelector(".snake")!;
    this.headEle = document.querySelector(".snake > div")!;
    this.bodiesEle = this.snakeEle.getElementsByTagName("div");
  }

  get X() {
    return this.headEle.offsetLeft;
  }
  get Y() {
    return this.headEle.offsetTop;
  }

  set X(value: number) {
    if (value === this.X) return;
    if (value < 0 || value > 290) throw new Error("撞到墙了！GAME OVER");

    // 要先动身体，不然第一节身体会丢失位置
    this.moveBody();

    this.headEle.style.left = value + "px";
  }
  set Y(value: number) {
    if (value === this.Y) return;
    if (value < 0 || value > 290) throw new Error("撞到墙了！GAME OVER");

    this.moveBody();

    this.headEle.style.top = value + "px";
  }

  addBody() {
    this.snakeEle.insertAdjacentHTML("beforeend", "<div></div>");
  }

  moveBody() {
    // 不需移动头部
    for (let i = this.bodiesEle.length - 1; i > 0; i--) {
      let lastX = (this.bodiesEle[i - 1] as HTMLElement).offsetLeft;
      let lastY = (this.bodiesEle[i - 1] as HTMLElement).offsetTop;

      (this.bodiesEle[i] as HTMLElement).style.left = lastX + "px";
      (this.bodiesEle[i] as HTMLElement).style.top = lastY + "px";
    }
  }
}

export default Snake;
