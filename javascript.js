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