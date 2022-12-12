//Array of the different choices for computer.
const choiceArray = ["rock", "paper", "scissor"];

//Function that returns a random computer choice.
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//Plays a single round of Rock Paper Scissors.
function singleRound(playerSelection, computerSelection) {
  // computerSelection = getComputerChoice(choiceArray);
  computerSelection = "scissors";
  playerSelection = prompt("Choose Your Weapon: Rock, Paper or Scissors?");
  playerSelection = playerSelection.toLowerCase();

  //Add functionality of return to this if...else statement!
  if (computerSelection === playerSelection) {
    console.log(`It's a tie, you both chose ${playerSelection}!`);
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    console.log(`You lose! Rock beats Scissors!`);
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    console.log(`You lose! Scissors beats Paper!`);
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log(`You lose! Paper beats Rock!`);
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You win! Rock beats Scissors!`);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors beats Paper!");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win! Paper beats Rock!");
  }
}
