const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Turn', function() {
    let card1, card2, card3
    let deck

    beforeEach( () => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

        deck = new Deck([card1, card2, card3]);
    })
    
    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    })

    it('should be able to hold an array of cards', () => {
        expect(deck.cards).to.be.a('array');
    })

    it('should know how many cards are in the deck', () => {
        expect(deck.countCards()).to.equal(3);
    })


})