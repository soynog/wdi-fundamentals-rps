////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
	if (playerMove == computerMove) {
		winner = 'tie';
	} else {
		switch (playerMove) {
			case 'rock':
				winner = computerMove == 'scissors' ? 'player' : 'computer';
				break;
			case 'paper':
				winner = computerMove == 'rock' ? 'player' : 'computer';
				break;			
			case 'scissors':
				winner = computerMove == 'paper' ? 'player' : 'computer';
				break;			
			default:
				console.log("ERROR - getWinner function");
		}
	}

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var ties = 0;

	while (playerWins < 5 && computerWins < 5 && ties < 10) {
		var playerMove = getPlayerMove();
		var computerMove = getComputerMove();
		var winner = getWinner(playerMove,computerMove);
		var wintext = ""

		switch (winner) {
			case 'player':
				playerWins++;
				wintext = "Player wins! ";
				break;
			case 'computer':
				computerWins++;
				wintext = "Computer wins! ";
				break;
			case 'tie':
				ties++;
				wintext = "It's a tie! ";
				break;
			case 'default':
				console.log("ERROR - playToFive function");
		}

		console.log("*** ROUND " + (playerWins + computerWins + ties) + " ***");
		console.log("Player chose " + playerMove + " and Computer chose " + computerMove + ".");
		console.log(wintext + "The score is now " + playerWins + " to " + computerWins + ".");
	}    

    return [playerWins, computerWins, ties];
}

