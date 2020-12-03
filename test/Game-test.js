const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let game

  beforeEach( () => {
    game = new Game();
  })

  it('should be a function', () => {
    expect(Game).to.be.a('function');
    
  })

  it('should start a new game', () => {
    game.start()
    expect(game.deck).to.be.instanceOf(Deck);
    expect(game.deck.cards.length).to.be.equal(30);
    expect(game.round).to.be.instanceOf(Round);
    expect(game.printMessage).to.be.a('function');
    expect(game.printQuestion).to.be.a('function');
  })
})