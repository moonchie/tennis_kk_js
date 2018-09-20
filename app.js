class Match {
    constructor(playerOne, playerTwo){
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
    }

    displayScore(){
        if (this.isDeuce()){
            return "Deuce";
        }

        if (this.hasAdvantage()){
            return this.getHigherPlayer() + " has advantage"
        }

        if (this.checkWinner()){
            return this.getHigherPlayer() + " won!"
        }

        if (this.playerOneScore === this.playerTwoScore){
            let result = this.translateScore(this.playerOneScore) + "-" + "All";
            console.log(result);
            return result;
        }

        let result = this.translateScore(this.playerOneScore)+ "-" + this.translateScore(this.playerTwoScore);
        console.log(result);
        return result
    }

    translateScore(givenScore){
        switch(givenScore){
            case 3:
                return "Forty";
            case 2:
                return "Thirty";
            case 1:
                return "Fifteen";
            case 0:
                return "Love";
            default:
                this.exceptionScore();
        }
    }

    playerOneScores(){
        this.playerOneScore ++;
        console.log(`player1 current score: ${this.playerOneScore}`)
    }


    playerTwoScores(){
        this.playerTwoScore ++;
        console.log(`player2 current score: ${this.playerTwoScore}`)
    }

    isDeuce(){
        return this.playerOneScore >= 3 && this.playerOneScore === this.playerTwoScore? true : false;
    }

    hasAdvantage(){
        if (this.playerOneScore >=4 && this.playerOneScore - this.playerTwoScore === 1){
            return true;
        }
        if (this.playerTwoScore >=4 && this.playerTwoScore - this.playerOneScore === 1) {
            return true;
        }
    }

    getHigherPlayer(){
        return this.playerOneScore > this.playerTwoScore? this.playerOne : this.playerTwo;
    }

    checkWinner(){
        if (this.playerOneScore >= 4 && this.playerOneScore - this.playerTwoScore >= 2){
            return true;
        }
        if (this.playerTwoScore >=4 && this.playerTwoScore - this.playerOneScore >=2){
            return true;
        }
    }

    exceptionScore(){
        return "This is not a valid score"
    }

}

const match = new Match('Shanshan', 'Clemence');
match.playerOneScores();
match.playerTwoScores();
match.playerOneScores();
match.playerTwoScores();
match.playerOneScores();
match.playerTwoScores();
match.playerOneScores();
match.playerTwoScores();
match.playerTwoScores();
match.playerTwoScores();

match.displayScore();

module.exports = Match;