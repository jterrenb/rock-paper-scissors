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
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function displayScore() {
    let textScore = document.querySelector(".score");
    textScore.textContent += `\n Round ${numRound}: ${text} \nScore: Player ${humanScore}   Computer ${computerScore}\n`;
    numRound++;
    if (numRound>5) {
        winner = whoWon();
        textScore.textContent += `Winner: ${winner}`;
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
    } else if(humanChoice === "Rock" && computerChoice === "Scissors" ||
            humanChoice === "Paper" && computerChoice === "Rock" ||
            humanChoice === "Scissors" && computerChoice === "Paper") {
                console.log( `You Win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
    } else {
        console.log( `You loose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    compareChoices( humanChoice, computerChoice)
    displayScore();
    console.log(humanChoice);
    console.log(computerChoice);
}

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.className);
    });
});