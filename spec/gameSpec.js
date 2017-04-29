describe ('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a total score of 0', function() {
    expect(game.totalScore).toEqual(0);
  });

  it('increase the total score to the first number', function() {
    game.firstRoll(7);
    expect(game.totalScore).toEqual(7);
    expect(game.firstFrameRoll1).toEqual(7);
  });

  it('adds an X to the first roll box and total score for the frame if the first roll is 10', function() {
    game.firstRoll(10);
    expect(game.totalScore).toEqual(10);
    expect(game.firstFrameRoll1).toEqual("X");
    expect(game.totalFirstFrame).toEqual("X");
  });

  it('adds second rolls score to first rolls score if they combined are less than 10', function() {
    game.firstRoll(3);
    game.secondRoll(4);
    expect(game.firstFrameRoll2).toEqual(4);
    expect(game.totalFirstFrame).toEqual(7);
  });




});
