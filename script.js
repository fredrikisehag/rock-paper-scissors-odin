//Array of the different choices for computer.
const choiceArray = ["Rock", "Paper", "Scissor"];

//Function that returns a random computer choice.
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
