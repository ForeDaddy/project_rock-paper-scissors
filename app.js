function generateRandomNumber() {
 //Random number between 1 and 3
  return Math.floor(Math.random() * 3);
}
let computerSelection = generateRandomNumber();
console.log(computerSelection);

function getComputerChoice(computerSelection) {
  if (computerSelection === 0) {
    return "Rock"
  } else if (computerSelection === 1) {
    return "Paper"
  } else if (computerSelection === 2) {
    return "Scissors"
  } 
}
console.log(getComputerChoice(computerSelection));
//Computer Randomly chooses Rock
//Or Computer Randomly chooses Paper
//Or computer Randomly chooses Scissors