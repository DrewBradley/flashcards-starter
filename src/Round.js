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
    this.currentCard = this.deck.cards[this.correctGuesses];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    this.turns++;
    if (this.currentCard.correctAnswer === guess){
      this.correctGuesses++;
    } else {
      this.incorrectGuesses++;
    }
    this.returnCurrentCard();
  }

}

module.exports = Round;