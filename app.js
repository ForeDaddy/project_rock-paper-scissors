//Prompt for player choice





function getPlayerChoice() {
  let playerChoice = prompt("Choose Rock, Paper, or Scissors", ).toUpperCase();
  console.log(playerChoice);
  if (playerChoice != "ROCK") {
    return "You Have Chosen Poorly!"
  } else {
  return playerChoice;
  }
}
console.log(getPlayerChoice());

function generateRandomNumber() {
 //Random number between 1 and 3
  return Math.floor(Math.random() * 3);
}
let computerSelection = generateRandomNumber();
console.log(computerSelection);

function getComputerChoice(computerSelection) {
  //Computer Randomly chooses Rock
  if (computerSelection === 0) {
    return "Rock"
  //Or Computer Randomly chooses Paper
  } else if (computerSelection === 1) {
    return "Paper"
  //Or computer Randomly chooses Scissors
  } else if (computerSelection === 2) {
    return "Scissors"
  } 
}
console.log(getComputerChoice(computerSelection));

