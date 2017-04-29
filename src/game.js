var Game = function() {
  this.totalScore = 0;

  this.firstFrameRoll1 = 0;
  this.firstFrameRoll2 = 0;
  this.totalFirstFrame = 0;

  this.secondFrameRoll1 = 0;
  this.secondFrameRoll2 = 0;
  this.totalSecondFrame = 0;

  this.thirdFrameRoll1 = 0;
  this.thirdFrameRoll2 = 0;
  this.totalThirdFrame = 0;

  this.fourthFrameRoll1 = 0;
  this.fourthFrameRoll2 = 0;
  this.totalFourthFrame = 0;

  this.fifthFrameRoll1 = 0;
  this.fifthFrameRoll2 = 0;
  this.totalFifthFrame = 0;
};

Game.prototype.firstRoll = function(pins) {
  (pins === 10) ?
  (this.totalScore = 10) && (this.firstFrameRoll1 = "X") && (this.totalFirstFrame = "X") :
  (this.totalScore += pins) && (this.firstFrameRoll1 += pins);
};

Game.prototype.secondRoll = function(pins) {
  this.firstFrameRoll2 = pins;
  this.totalFirstFrame = (this.firstFrameRoll1 + this.firstFrameRoll2);



};
