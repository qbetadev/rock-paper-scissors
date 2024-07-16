let computerScore = 0;
let humanScore = 0;
let randomNumber = getRandomIntInclusive(1, 3);

//Checking random number in console
//console.log(randomNumber);

function getRandomIntInclusive(minNumber, maxNumber) {
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

//Getting computer choice depending on the random number above
function getComputerChoice(randomNumber) {
  let choiceComputer;
  if (randomNumber === 1) {
    choiceComputer = "rock";
  } else if (randomNumber === 2) {
    choiceComputer = "paper";
  } else {
    choiceComputer = "scissors";
  }
  console.log("Computer choice - " + choiceComputer);
}

//Asking user to input his choice
function getHumanChoice() {
    let choiceHuman = prompt("Choose rock, paper or scissors");
    console.log("Your choice - " + choiceHuman);
}

getHumanChoice();
getComputerChoice();

