//Array storing computers different choices:
const choiceArray = ['rock', 'paper', 'scissors'];

//Grab buttons from HTML
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const playerScoreBoard = document.querySelector('.player-score-board');
const computerScoreBoard = document.querySelector('.computer-score-board');

//Declare variables that will be used later in game:
let playerSelection;
let computerSelection;

//Variables to keep track of score in game:
let computerScore = 0;
let playerScore = 0;

//Function that randomly selects choice for computer:
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//EventListeners on all three button choices:

rockBtn.addEventListener('click', () => {
  playerSelection = 'rock';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  declareWinner();
});

paperBtn.addEventListener('click', () => {
  playerSelection = 'paper';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  declareWinner();
});

scissorsBtn.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  declareWinner();
});

//Function that plays one round of Rock Paper Scissors and declares winner of round:
function playRound(playerSelection, computerSelection) {
  //If player wins:
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++;
    playerScoreBoard.textContent = `PlayerScore: ${playerScore}`;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++;
    playerScoreBoard.textContent = `PlayerScore: ${playerScore}`;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++;
    playerScoreBoard.textContent = `PlayerScore: ${playerScore}`;
    //If computer wins:
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    computerScore++;
    computerScoreBoard.textContent = `ComputerScore: ${computerScore}`;
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    computerScore++;
    computerScoreBoard.textContent = `ComputerScore: ${computerScore}`;
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    computerScore++;
    computerScoreBoard.textContent = `ComputerScore: ${computerScore}`;
  } else if (computerSelection === playerSelection) {
    return `It's a draw! You both choosed ${playerSelection}`;
  }
}

//Function that declares winner after 5 points reached:
function declareWinner() {
  if (playerScore === 5) {
    let h2 = document.createElement('h2');
    h2.textContent = `You win! You beat the computer ${playerScore} to ${computerScore}`;
  } else if (computerScore === 5) {
    let h2 = document.createElement('h2');
    h2.textContent = `You lost! Computer beat you ${computerScore} to ${playerScore}`;
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
