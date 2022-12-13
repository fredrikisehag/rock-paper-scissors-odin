//Array of the different choices for computer.
const choiceArray = ["rock", "paper", "scissor"];
let computerSelection = getComputerChoice(choiceArray);
let playerSelection = prompt(
  "Choose Your Weapon: Rock, Paper or Scissors?"
).toLowerCase();
let computerScore = 0;
let playerScore = 0;

//Function that returns a random computer choice.
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//Plays a single round of Rock Paper Scissors.
function singleRound(playerSelection, computerSelection) {
  //Declares winner variable
  let roundWinner;

  //Function that determine the winner of the game!
  if (computerSelection === playerSelection) {
    return `It's a tie, you both chose ${playerSelection}!`;
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    roundWinner = "computer";
    ++computerScore;
    return `You lose! Rock beats Scissors!`;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    roundWinner = "computer";
    ++computerScore;
    return `You lose! Scissors beats Paper!`;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    roundWinner = "computer";
    ++computerScore;
    return `You lose! Paper beats Rock!`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    roundWinner = "player";
    ++playerScore;
    return `You win! Rock beats Scissors!`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    roundWinner = "player";
    ++playerScore;
    return "You win! Scissors beats Paper!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    roundWinner = "player";
    ++playerScore;
    return "You win! Paper beats Rock!";
  }
}

//Function that runs the game 5 times, determines a winner and logs to console
//who won the game.
function game() {
  for (let i = 0; i < 5; i++) {
    singleRound(playerSelection, computerSelection);
    console.log(`ComputerScore: ${computerScore}`);
    console.log(`PlayerScore: ${playerScore}`);
  }
  if (computerScore > playerScore) {
    console.log(`Computer Wins! You Lose!`);
  } else if (computerScore < playerScore) {
    console.log(`You win! Computer Lose!`);
  } else {
    console.log(`It's a draw!`);
  }
}

game();
