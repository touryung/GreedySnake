class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.querySelector(".food")!;
  }

  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }

  randomPosition() {
    const left = createRandom(0, 29);
    const top = createRandom(0, 29);

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

/**
 * 获取整十数
 * @param min
 * @param max
 * @returns
 */
function createRandom(min: number, max: number) {
  return Math.floor(min + Math.random() * (max - min + 1)) * 10;
}

export default Food;
