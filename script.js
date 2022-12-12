const choiceArray = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
