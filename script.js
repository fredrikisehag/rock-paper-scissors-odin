//Array storing computers different choices:
const choiceArray = ["rock", "paper", "scissor"];

//Function that randomly selects choice for computer:
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
