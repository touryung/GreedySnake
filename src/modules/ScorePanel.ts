class ScorePanel {
  score = 0;
  level = 1;

  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  maxLevel: number;
  upLevelScore: number;

  constructor(maxLevel: number = 10, upLevelScore: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;

    this.maxLevel = maxLevel;
    this.upLevelScore = upLevelScore;
  }

  addScore() {
    this.scoreEle.innerHTML = String(++this.score);
    if (this.score % this.upLevelScore === 0) {
      this.addLevel();
    }
  }

  addLevel() {
    if (this.level >= this.maxLevel) return;
    this.levelEle.innerHTML = String(++this.level);
  }
}

export default ScorePanel;
