//Prompt for player choice

const aRock = "ROCK";
const aPaper = "PAPER";
const aScissors = "SCISSORS";
const badChoice =  "You Have Chosen Poorly!"


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

function playRound(playerPlays, computerPlays) {
  if (playerPlays === badChoice) {
    return "No Score - Try Again";
  } else if (playerPlays === aRock && computerPlays === aRock) {
    return "It's a Tie! - Both Players Chose ROCK";
  } else if (playerPlays === aRock && computerPlays === aPaper) {
    return "You Lose! - PAPER Covers ROCK";
  } else if (playerPlays === aRock && computerPlays === aScissors) {
    return "You Win! - ROCK Smashes SCISSORS";
  } else if (playerPlays === aPaper && computerPlays === aPaper) {
    return "It's a Tie! - Both Players Chose PAPER";
  } else if (playerPlays === aPaper && computerPlays === aScissors) {
    return "You Lose! - SCISSORS cuts PAPER";
  } else if (playerPlays === aPaper && computerPlays === aRock) {
    return "You Win! - PAPER covers ROCK";
  } else if (playerPlays === aScissors && computerPlays === aScissors) {
    return "It's a Tie! - Both Players Chose SCISSORS";
  } else if (playerPlays === aScissors && computerPlays === aRock) {
    return "You Lose! - ROCK Smashes SCISSORS";
  } else if (playerPlays === aScissors && computerPlays === aPaper) {
    return "You Win! - SCISSORS cuts PAPER";
  }
}
console.log(playRound(playerPlays, computerPlays));