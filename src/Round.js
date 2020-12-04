const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.correctGuesses = 0;
    this.currentCard = deck.cards[0];
    this.incorrectGuesses = 0;
  }
  returnCurrentCard() {
    if (!this.currentCard) {
      this.endRound();
    } else {
      return this.currentCard = this.deck.cards[this.turns];
    }
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    this.turns++;
    let feedback = turn.giveFeedback();
    if (turn.evaluateGuess() === true) {
      this.correctGuesses++;
    } else {
      this.incorrectGuesses++;
    }
    return feedback;
  }
  calculatePercentCorrect() {
    return ((this.correctGuesses / this.turns) * 100)
  }
  endRound() {
    let score = this.calculatePercentCorrect();
    console.log(`**Round over!** You answered ${score}% of the questions correctly!`)
  }

}

module.exports = Round;