let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let text = "";
let numRound = 0;
let winner = "";

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);
    switch (random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function displayScore() {
    let textScore = document.querySelector(".score");
    numRound++;
    textScore.textContent = `Round ${numRound}: ${text} Score: Player ${humanScore}
       Computer ${computerScore}`;
    if (numRound>=5) {
        winner = whoWon();
        textScore.textContent += ` Winner: ${winner}`;
        numRound = 0;
        humanScore = 0;
        computerScore = 0;

    }
}

function whoWon () {
    if (humanScore>computerScore) {
        return "Player";
    } else if (humanScore<computerScore) {
        return "Computer";
    } else {
        return "None";
    }
}

function compareChoices(humanChoice, computerChoice) {
    if ( humanChoice === computerChoice) {
        text = "Draw, no points this time!";
    } else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
                text = `You Win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
    } else {
        text =`You loose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    compareChoices( humanChoice, computerChoice);
    displayScore();
}

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className);
    });
});