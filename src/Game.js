const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
  }

  start() {
    const cards = [];
    prototypeQuestions.forEach(obj => {
      let card = new Card(obj.id, obj.question, obj.answers, obj.correctAnswer)
      cards.push(card);
    })
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;