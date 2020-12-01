const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should take in a guess', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);
        expect(turn.guess).to.equal('array')
    })

    it('should take in a card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        expect(turn.card).to.equal(card)
    })

    it('should return the guess', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        const guess = turn.returnGuess();
        expect(guess).to.equal('object')
    })

    it('should return the card', function () {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        const returnedCard = turn.returnCard();
        expect(returnedCard).to.equal(card)
    })

    it('should be able to check if guess is correct', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        const evaluatedGuess = turn.evaluateGuess();
        expect(evaluatedGuess).to.equal(true);
    })

    it('should be able to check if guess is incorrect', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);
        const evaluatedGuess = turn.evaluateGuess();
        expect(evaluatedGuess).to.equal(false);
    })

    it('should give feedback if guess is correct', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        const feedback = turn.giveFeedback();
        expect(feedback).to.equal("correct!");
    })

    it('should give feedback if guess is incorrect', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card);
        const feedback = turn.giveFeedback();
        expect(feedback).to.equal("incorrect!");
    })
});