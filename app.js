//Prompt for player choice

const aRock = "ROCK";
const aPaper = "PAPER";
const aScissors = "SCISSORS";


//Get case insensitive user choice
function getPlayerChoice() {
  let playerChoice = prompt("Choose Rock, Paper, or Scissors", ).toUpperCase();
  
 //edge case stop for non valid selection
  if ([aRock, aPaper, aScissors].indexOf(playerChoice) === -1) {
    return "You Have Chosen Poorly!";
  }  else {
  return playerChoice;
  }
}


function generateRandomNumber() {
 //Random number between 1 and 3
  return Math.floor(Math.random() * 3);
}
let computerSelection = generateRandomNumber();


function getComputerChoice(computerSelection) {
  //Computer Randomly chooses Rock
  if (computerSelection === 0) {
    return "ROCK"
  //Or Computer Randomly chooses Paper
  } else if (computerSelection === 1) {
    return "PAPER"
  //Or computer Randomly chooses Scissors
  } else if (computerSelection === 2) {
    return "SCISSORS"
  } 
}
//console.log(getComputerChoice(computerSelection));
//console.log(getPlayerChoice());

let playerPlays = getPlayerChoice();
console.log(playerPlays);
let computerPlays = getComputerChoice(computerSelection);
console.log(computerPlays);

//function playRound()