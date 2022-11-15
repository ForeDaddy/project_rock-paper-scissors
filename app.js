

const aRock = "ROCK";
const aPaper = "PAPER";
const aScissors = "SCISSORS";
const badChoice =  "You Have Chosen Poorly!";
const win = "You Win! ";
const lose = "You Lose! ";
const tie = "It's a Tie! ";
const noGame = "You Have Chosen Poorly!";
let computerSelection;





//Get case insensitive user choice
function getPlayerChoice() {
  let playerChoice = prompt("Choose Rock, Paper, or Scissors", ).toUpperCase();
  
 //edge case stop for non valid selection
  if ([aRock, aPaper, aScissors].indexOf(playerChoice) === -1) {
    return noGame;
  }  else {
  return playerChoice;
  }
}

function getComputerChoice() {
  //Computer Randomly chooses Rock
  let computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection === 0) {
    return aRock;
  //Or Computer Randomly chooses Paper
  } else if (computerSelection === 1) {
    return aPaper;
  //Or computer Randomly chooses Scissors
  } else if (computerSelection === 2) {
    return aScissors;
  } 
}
//console.log(getComputerChoice());
//console.log(getPlayerChoice());

let playerPlays = getPlayerChoice();
console.log("You Play: " + playerPlays);
let computerPlays = getComputerChoice();
console.log("Computer Plays: " + computerPlays);

function playRound(playerPlays, computerPlays) {
  if (playerPlays === badChoice) {
    return "No Score - Try Again";
  } else if (playerPlays === aRock && computerPlays === aRock) {
    return tie + "- Both Players Chose ROCK";
  } else if (playerPlays === aRock && computerPlays === aPaper) {
    return lose + "- PAPER Covers ROCK";
  } else if (playerPlays === aRock && computerPlays === aScissors) {
    return win + "- ROCK Smashes SCISSORS";
  } else if (playerPlays === aPaper && computerPlays === aPaper) {
    return tie + "- Both Players Chose PAPER";
  } else if (playerPlays === aPaper && computerPlays === aScissors) {
    return lose + "- SCISSORS cuts PAPER";
  } else if (playerPlays === aPaper && computerPlays === aRock) {
    return win + "- PAPER covers ROCK";
  } else if (playerPlays === aScissors && computerPlays === aScissors) {
    return tie + "- Both Players Chose SCISSORS";
  } else if (playerPlays === aScissors && computerPlays === aRock) {
    return lose + "- ROCK Smashes SCISSORS";
  } else if (playerPlays === aScissors && computerPlays === aPaper) {
    return win + "- SCISSORS cuts PAPER";
  }
  
}
console.log(playRound(playerPlays, computerPlays))
console.log("get ready for the showdown")

alert("Practice time is over. It's time for a 5 round showdown!");

 function game() {
   for (let i = 0; i < 5; i++) {
    console.log("             ");
     let playerPlays = getPlayerChoice();
     let computerPlays = getComputerChoice();
     playRound();
     console.log("You Play: " + playerPlays);
     console.log("Computer Plays: " + computerPlays);
     console.log(playRound(playerPlays, computerPlays));
     console.log("           ");
   }
 }
 game(); 
