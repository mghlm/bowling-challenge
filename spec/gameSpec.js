describe ('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe ('Total Score', function() {
    it('is 0 at the beginning of a game', function() {
      expect(game.totalScore).toEqual(0);
    });
    it('increases to the number of pins from first roll', function() {
      game.firstRoll(7);
      expect(game.totalScore).toEqual(7);
      // expect(game.firstFrameRoll1).toEqual(7);
    });
  });

  describe ('Roll 1 score', function() {
    it('increases to the number of pins from first roll', function() {
      game.firstRoll(7);
      expect(game.firstFrameRoll1).toEqual(7);
    });
    it ('is set to "X" if first roll is 10', function() {
      game.firstRoll(10);
      expect(game.firstFrameRoll1).toEqual("X");
    });
  });

  describe('Roll 2 score', function() {
    it('is number of pins + score from roll 1 if they combined are less than 10', function() {
      game.firstRoll(3);
      game.secondRoll(4);
      expect(game.firstFrameRoll2).toEqual(4);
    });
    it('is "/" if number of pins + score from roll 1 is equal to 10', function() {
      game.firstRoll(3);
      game.secondRoll(7);
      expect(game.firstFrameRoll2).toEqual('/');
    });
  });

  describe('Total frame score', function() {
    it('is roll 1 score + roll 2 score, if they combined are less than 10', function() {
      game.firstRoll(3);
      game.secondRoll(4);
      expect(game.totalFirstFrame).toEqual(7);
    });
    it('is "/" if roll 1 score + roll 2 score is 10', function() {
      game.firstRoll(3);
      game.secondRoll(7);
      expect(game.totalFirstFrame).toEqual('/');
    });
    it('is "X" if roll 1 score is 10', function() {
      game.firstRoll(10);
      expect(game.totalFirstFrame).toEqual("X");
    });
  });


  describe('Second Roll', function() {
    it('returns error-message if first roll was 10', function() {
      game.firstRoll(10);
      expect(game.secondRoll(2)).toEqual("No pins left");
    });
    it('returns error-message if number of pins + roll 1 score is more than 10', function() {
      game.firstRoll(3);
      expect(game.secondRoll(8)).toEqual("Error");
    });
  });





});
