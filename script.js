let scoreComputer = 0;
let scoreHuman = 0;
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
    switch(randomNumber) {
        case 1:
            choiceComputer = "rock";
            break;
        case 2:
            choiceComputer = "paper";
            break;
        case 3:
            choiceComputer = "scissors";
            break;
        default:
            console.log("try again");
    }
  return choiceComputer;
}

//Asking user to input his choice
function getHumanChoice() {
    let choiceHuman = prompt("Choose rock, paper or scissors").toLowerCase();
    return choiceHuman;
}

let selectionHuman = getHumanChoice();
let selectionComputer = getComputerChoice(randomNumber);

function showSelectionHuman() {
    console.log("Your choice - " + selectionHuman);
}

function showSelectionComputer() {
    console.log("Computer choice - " + selectionComputer);
}

showSelectionHuman();
showSelectionComputer();

function playRound() {
    if (selectionHuman === selectionComputer) {
        console.log("It's a tie!");
    } else if (
        (selectionHuman === "rock" && selectionComputer === "paper") ||
        (selectionHuman === "paper" && selectionComputer === "scissors") ||
        (selectionHuman === "scissors" && selectionComputer === "rock")
    ) {
        console.log(`You lose, ${selectionComputer} beats ${selectionHuman}!`);
        scoreComputer += 1;
        console.log(scoreComputer, scoreHuman);
    } else if (
        (selectionHuman === "rock" && selectionComputer === "scissors") ||
        (selectionHuman === "paper" && selectionComputer === "rock") ||
        (selectionHuman === "scissors" && selectionComputer === "paper")
    ) {
        console.log(`You won, ${selectionHuman} beats ${selectionComputer}!`);
        scoreHuman += 1;
        console.log(scoreComputer, scoreHuman);
    }
}

playRound();