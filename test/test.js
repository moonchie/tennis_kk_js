const assert = require('chai').assert;
const Match = require('../app.js');



// console.log(match.playerOne);

describe('Tennis match just started!', function() {
    const match = new Match('Shanshan', 'Clemence');

    describe('Match 1', function(){
        it('should have 2 players', function() {
            assert.equal(match.playerOne, 'Shanshan');
            assert.equal(match.playerTwo, 'Clemence');
        });

        it('should initiate the game with 0', function(){
            assert.equal(match.playerOneScore, 0);
            assert.equal(match.playerTwoScore, 0);
        });

        it('should be Fifteen-Love when playerOne scores', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, "Fifteen-Love")
        });

        it('should be Thirty-Love when playerOne scores again', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, "Thirty-Love")
        });

        it('should be Thirty-Fifteen when playerTwo scores', function(){
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, "Thirty-Fifteen")
        });

        it('should be Forty-Fifteen when playerOne scores', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, "Forty-Fifteen")
        });

        it('should has a winner when playerOne scores again', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, `${match.playerOne} won!`)
        });
    });

    describe("Match 2", function(){
        const match = new Match('Pikachu', 'Eevee');

        it('should be Fifteen-Love when playerOne scores', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, "Fifteen-Love")
        });

        it('should be Fifteen-All when playerTwo scores', function(){
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, "Fifteen-All")
        });

        it('should be Thirty-Fifteen when playerOne scores', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, "Thirty-Fifteen")
        });

        it('should be Thirty-All when playerTwo scores', function(){
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, "Thirty-All")
        });

        it('should be Deuce', function(){
            match.playerOneScores();
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, "Deuce")
        });

        it('should have an advantge', function(){
            match.playerOneScores();

            let scores = match.displayScore();
            assert.equal(scores, `${match.playerOne} has advantage`)
        });

        it('should be Deuce', function(){
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, "Deuce")
        });

        it('should have an advantage', function(){
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, `${match.playerTwo} has advantage`)
        });

        it('should be Deuce', function(){
            match.playerTwoScores();

            let scores = match.displayScore();
            assert.equal(scores, `${match.playerTwo} won!`)
        });
    });
});