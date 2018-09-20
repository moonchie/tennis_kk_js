const assert = require('chai').assert;
const Match = require('../app.js');

const match = new Match('Shanshan', 'Clemence');

// console.log(match.playerOne);

describe('Tennis match just started!', function() {

    describe('Match 1', function(){
        it('should have 2 players', function() {
            assert.equal(match.playerOne, 'Shanshan');
            assert.equal(match.playerTwo, 'Clemence');
        });


        it('should be Fifteen-Love when playerOne scores', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, "Fifteen-Love")
        })

        it('should be Thirty-Love when playerOne scores two times', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, "Thirty-Love")
        })

        it('should be Thirty-Fifteen', function(){
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, "Thirty-Fifteen")
        })
    })

    describe("Match 2", function(){
        it('should be a deuce', function(){
            match.playerOneScores();
            match.playerOneScores();
            match.playerTwoScores();
            match.playerTwoScores();
            match.playerOneScores();
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, "Deuce")
        })

    })

});