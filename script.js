//Array storing computers different choices:
const choiceArray = ['rock', 'paper', 'scissors'];
//Variables to keep track of score in game:
let computerScore = 0;
let playerScore = 0;

//Function that randomly selects choice for computer:
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//Function that plays one round of Rock Paper Scissors and declares winner of round:
function playRound(playerSelection, computerSelection) {
  //If player wins:
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    ++playerScore;
    return 'You won! Rock beats Scissors!';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    ++playerScore;
    return 'You won! Scissors beats Paper!';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    ++playerScore;
    return 'You won! Paper beats Rock!';
    //If computer wins:
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    ++computerScore;
    return 'You lost! Rock beats Scissors!';
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    ++computerScore;
    return 'You lost! Scissors beats Paper!';
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    ++computerScore;
    return ' You lost! Paper beats Rock!';
  } else if (computerSelection === playerSelection) {
    return `It's a draw! You both choosed ${playerSelection}`;
  }
}

//Function that plays a 5 round game that keeps score and reports a winner and looser
//at the end:
// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt(
//       "What is your Choice? Rock, Paper or Scissors?"
//     ).toLowerCase();
//     let computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
//     console.log(`Round ${i + 1}:`);
//     console.log(`ComputerScore: ${computerScore}`);
//     console.log(`PlayerScore: ${playerScore}`);
//   }
//   if (computerScore > playerScore) {
//     console.log("You lost against the computer!");
//   } else if (computerScore < playerScore) {
//     console.log("You won against the computer! Wohooooo! Congrats!");
//   } else if (computerScore == playerScore) {
//     console.log("It's a draw!");
//   }
// }

// game();
