console.log("Hello World");
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
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
function getHumanChoice() {
    return prompt("Choose Rock, Paper or Scissors");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let firstLetterHuman = humanChoice.slice (0,1);
    firstLetterHuman = firstLetterHuman.toUpperCase();
    humanChoice = firstLetterHuman + humanChoice.slice(1);
    if ( humanChoice === computerChoice) {
        console.log( "Draw, no points this time!");
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