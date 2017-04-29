var Game = function() {
  this.totalScore = 0;

  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.totalFirstFrame = 0;
};

Game.prototype.firstRoll = function(pins) {
  if (pins === 10) {
    (this.firstRollScore = "X") && (this.totalFirstFrame = "X");
  } else {
    (this.totalScore += pins) && (this.firstRollScore += pins);
  }
};

Game.prototype.secondRoll = function(pins) {
  if (this.firstRollScore === "X") {
    return "No pins left";
  } else if ((pins + this.firstRollScore) === 10) {
    (this.secondRollScore = '/') && (this.totalFirstFrame = '/');
  } else if ((pins + this.firstRollScore) > 10) {
    return "Error";
  } else {
    (this.secondRollScore = pins) && (this.totalFirstFrame = (this.firstRollScore + this.secondRollScore)) && (this.totalScore += this.secondRollScore );
  }
};

// Game.prototype.strikeBonus = function(totalFrameScore) {
//   return (totalFrameScore * 2);
// };

// Game.prototype.spareBonus = function(pins) {
//   return (pins * 2);
// };
