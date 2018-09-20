class Match {
    constructor(playerOne, playerTwo){
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
    }

    displayScore(){
        if (this.isDeuce()){
            console.log("Duce");
            return "Deuce";
        }
        console.log(this.playerOneScore);
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
                return "do something else"
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

}

const match = new Match('Shanshan', 'Clemence');
match.playerOneScores();
match.playerTwoScores();
match.playerOneScores();
match.playerTwoScores();
match.playerOneScores();
match.playerTwoScores();
match.displayScore();


module.exports = Match;