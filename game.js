
function computerPlay() {
    let finalDecision = "";
    let decision = Math.floor((Math.random() * 3) + 1)

    if (decision == 1) {
        finalDecision = "Rock";
    }
    else if (decision == 2) {
        finalDecision = "Paper";
    }
    else {
        finalDecision = "Scissors";
    }
    return finalDecision;
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "Scissors") {
            result = "You win! Rock beats Scissors";
        }
        else if (computerSelection == "Paper") {
            result = "You lose! Paper beats Rock";
        }
        else {
            result = "You both threw Rock and tied!";
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "Scissors") {
            result = "You lose! Scissors beats Paper";
        }
        else if (computerSelection == "Paper") {
            result = "You both threw Paper and tied!";
        }
        else {
            result = "You win! Paper beats Rock";
        }
    }

    else {
        if (computerSelection == "Scissors") {
            result = "You both threw Scissors and tied!";
        }
        else if (computerSelection == "Paper") {
            result = "You win! Scissors beats Paper";
        }
        else {
            result = "You lose! Rock beats Scissors";
        }
    }
    return result;
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerPrompt = prompt("What do you play?")
        let gameResult = (playRound(playerPrompt, computerPlay()))
        console.log(gameResult);
        if (gameResult.includes("You win")) {
            playerScore++;
        }
        else if (gameResult.includes("You lose")) {
            computerScore++;
        }
    }
    
    if (playerScore > computerScore) {
        console.log("Player wins the series!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins the series!");
    }
    else {
        console.log("You tied the series!")
    }
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}

game();
