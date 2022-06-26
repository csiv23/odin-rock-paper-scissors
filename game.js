var buttons = Array.from(document.getElementsByTagName("button"));


console.log(buttons);

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
    console.log("buttons disabled");
}

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

function changeScores(roundResult, scores) {
    let playerScore = scores[0];
    let computerScore = scores[1];
    let newScores = [];

    if (roundResult.startsWith("You win!")) {
        playerScore++;
    }
    else if (roundResult.startsWith("You lose!")) {
        computerScore++;
    }
    newScores.push(playerScore);
    newScores.push(computerScore);

    return newScores;
}


function game() {
    let scores = [0, 0];
    let gameResult = "";
    let startGame = false;
    let gameNum = 1;
    
    const results = document.querySelector('#results');
    const resultsContent = document.createElement('div');
    resultsContent.classList.add('game-results');

    const score = document.querySelector('#score');
    const scoreContent = document.createElement('div');
    scoreContent.classList.add('score')
    
    let rockbtn = document.getElementById("rock");
    rockbtn.addEventListener('click', event => {
        startGame = true;
        gameResult = playRound("rock", computerPlay());
        scores = changeScores(gameResult, scores);
        resultsContent.textContent = `${gameResult}`;

        if(scores[0] >= 5) {
            scoreContent.textContent = "Player Wins! Reload the page to play again.";
            disableButtons();
        }
        else if(scores[1] >= 5) {
            scoreContent.textContent = "Computer Wins! Reload the page to play again.";
            disableButtons();
        }
        else {
        scoreContent.textContent = `Player: ${scores[0]} - Computer: ${scores[1]}`;
        gameNum++;
        }
    });

    let paperbtn = document.getElementById("paper");
    paperbtn.addEventListener('click', event => {
        startGame = true;
        gameResult = (playRound("paper", computerPlay()));
        resultsContent.textContent = `${gameResult} is the game result`;
        gameNum++;
    });

    let scissorsbtn = document.getElementById("scissors");
    scissorsbtn.addEventListener('click', event => {
        startgame = true;
        gameResult = (playRound("scissors", computerPlay()));
        resultsContent.textContent = `${gameResult} is the game result`;
        gameNum++;
    });

    results.appendChild(resultsContent);
    score.appendChild(scoreContent);

}

game();
