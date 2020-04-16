let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10)}

function compareGuesses(humanGuess, computerGuess, secretTarget) { 
if (humanGuess === computerGuess) {return true}
  else if (Math.abs(humanGuess - secretTarget) <= Math.abs(computerGuess - secretTarget)) {return true}
else if (Math.abs(humanGuess - secretTarget) >= Math.abs(computerGuess - secretTarget)) {return false}

}



function updateScore(winner) {
  if (winner === 'human') {humanScore += 1}
  else if (winner === 'computer') {computerScore += 1}
}

function advanceRound() { currentRoundNumber += 1 }