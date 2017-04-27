var Game = function() {
  this.score = 0;

  this.firstFrameRoll1 = 0;
  this.firstFrameRoll2 = 0;

  this.secondFrameRoll1 = 0;
  this.secondFrameRoll2 = 0;

  this.thirdFrameRoll1 = 0;
  this.thirdFrameRoll2 = 0;

  this.fourthFrameRoll1 = 0;
  this.fourthFrameRoll2 = 0;

  this.fifthFrameRoll1 = 0;
  this.fifthFrameRoll2 = 0;
};

Game.prototype.firstRoll = function(points) {
  (points === 10) ? (this.score = "X") : (this.score += points);
};
