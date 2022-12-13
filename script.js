//Array storing computers different choices:
const choiceArray = ["rock", "paper", "scissors"];

//Function that randomly selects choice for computer:
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//Function that plays one round of Rock Paper Scissors and declares winner of round:
function playRound(playerSelection, computerSelection) {
  //If player wins:
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You won! Rock beats Scissors!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You won! Scissors beats Paper!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You won! Paper beats Rock!";
    //If computer wins:
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You lost! Rock beats Scissors!";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You lost! Scissors beats Paper!";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return " You lost! Paper beats Rock!";
  }
}
