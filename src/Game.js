const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.deck = [];
    this.round;
    this.cards = [];
  }

  start(array) {
    array.forEach(obj => {
      let card = new Card(obj.id, obj.question, obj.answers, obj.correctAnswer)
      this.cards.push(card);
    })
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards. Round ${round.roundCount}!
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;