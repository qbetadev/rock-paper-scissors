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

function showSelectionHuman(selectionHuman) {
    console.log("Your choice - " + selectionHuman);
}

function showSelectionComputer(selectionComputer) {
    console.log("Computer choice - " + selectionComputer);
}

//Single round function
function playRound(scoreComputer, scoreHuman) {
    let roundWinner = "";
    let randomNumber = getRandomIntInclusive(1, 3);
    let selectionHuman = getHumanChoice();
    let selectionComputer = getComputerChoice(randomNumber);
    if (selectionHuman === selectionComputer) {
        showSelectionHuman(selectionHuman);
        showSelectionComputer(selectionComputer);
        console.log("It's a tie!");
        console.log(`Computer score - ${scoreComputer}, your score ${scoreHuman}`);
        roundWinner = "tie";
    } else if (
        (selectionHuman === "rock" && selectionComputer === "paper") ||
        (selectionHuman === "paper" && selectionComputer === "scissors") ||
        (selectionHuman === "scissors" && selectionComputer === "rock")
    ) {
        showSelectionHuman(selectionHuman);
        showSelectionComputer(selectionComputer);
        console.log(`You lose, ${selectionComputer} beats ${selectionHuman}!`);
        scoreComputer += 1;
        console.log(`Computer score - ${scoreComputer}, your score ${scoreHuman}`);
        roundWinner = "computer";
    } else if (
        (selectionHuman === "rock" && selectionComputer === "scissors") ||
        (selectionHuman === "paper" && selectionComputer === "rock") ||
        (selectionHuman === "scissors" && selectionComputer === "paper")
    ) {
        showSelectionHuman(selectionHuman);
        showSelectionComputer(selectionComputer);
        console.log(`You won, ${selectionHuman} beats ${selectionComputer}!`);
        scoreHuman += 1;
        console.log(`Computer score - ${scoreComputer}, your score ${scoreHuman}`);
        roundWinner = "human";
    }
}