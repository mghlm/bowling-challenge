describe ('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a score of 0', function() {
    expect(game.score).toEqual(0);
  });

  it('increase the score to the first number', function() {
    game.firstRoll(7)
    expect(game.score).toEqual(7);
  });

  it('doesn\'t increase the score if the first roll is 10', function() {
    game.firstRoll(10)
    expect(game.score).toEqual("X");
  });

  it('')



});
