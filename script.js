//Array of the different choices for computer.
const choiceArray = ["rock", "paper", "scissor"];
let computerSelection = "scissors";
const playerSelection = prompt("Choose Your Weapon: Rock, Paper or Scissors?");
let computerScore = 0;
let playerScore = 0;

//Function that returns a random computer choice.
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//Plays a single round of Rock Paper Scissors.
function singleRound(playerSelection, computerSelection) {
  // computerSelection = getComputerChoice(choiceArray);
  playerSelection = playerSelection.toLowerCase();

  //Function that determine the winne of the game!
  if (computerSelection === playerSelection) {
    return `It's a tie, you both chose ${playerSelection}!`;
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return `You lose! Rock beats Scissors!`;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return `You lose! Scissors beats Paper!`;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return `You lose! Paper beats Rock!`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You win! Rock beats Scissors!`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats Paper!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    singleRound(computerSelection, playerSelection);
  }
}
