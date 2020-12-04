const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3
  let deck
  let round
  let turn

  beforeEach( () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);

    turn = new Turn();

    round = new Round(deck);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })

  it('should take in a deck of cards as an argument', () => {
    expect(round.deck.cards).to.be.a('array');
    expect(round.deck.cards[0].id).to.equal(1);
    expect(round.deck.cards[0].correctAnswer).to.equal('sea otter');
  })

  it('should return the current card', () => {
    round.returnCurrentCard();
    expect(round.currentCard.correctAnswer).to.equal('sea otter')
  })

  it('should count the number of turns', () => {
    round.takeTurn('pug');
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.equal(1);
    expect(round.currentCard.id).to.equal(14)
    
    round.takeTurn('spleen');
    round.takeTurn('gallbladder');
    expect(round.turns).to.equal(4);
    expect(round.incorrectGuesses).to.equal(2);
    expect(round.currentCard.id).to.equal(12)
  })

  it('should count the number of incorrect guesses', () => {
    round.takeTurn('pug');
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.equal(1);
    
    round.takeTurn('spleen');
    round.takeTurn('gallbladder');
    expect(round.incorrectGuesses).to.equal(2);
  })

  it('should count the number of correct guesses', () => {
    round.takeTurn('pug');
    round.takeTurn('sea otter');
    expect(round.correctGuesses).to.equal(1);
    
    round.takeTurn('spleen');
    round.takeTurn('appendix');
    round.takeTurn('gallbladder');
    expect(round.correctGuesses).to.equal(2);
  })

  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('pug');
    round.takeTurn('sea otter');
    let score = round.calculatePercentCorrect();
    expect(score).to.equal(50)
    
    round.takeTurn('spleen');
    round.takeTurn('appendix');
    round.takeTurn('gallbladder');
    let score = round.calculatePercentCorrect();
    expect(score).to.equal(40)
  })
  it('should end when all cards are played', () => {
    round.takeTurn('pug');
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    let score = round.calculatePercentCorrect();
    expect(round.correctGuesses).to.equal(3);
    expect(score).to.equal(75);
  })

})