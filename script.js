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

function showSelectionHuman(selectionHuman) {
    return("Your choice - " + selectionHuman);
}

function showSelectionComputer(selectionComputer) {
    return("Computer choice - " + selectionComputer)
}

//Single round function
function playRound(selectionHuman) {
    let roundWinner = "";
    let randomNumber = getRandomIntInclusive(1, 3);
    let selectionComputer = getComputerChoice(randomNumber);
    if (selectionHuman === selectionComputer) {
        roundWinner = "tie";
        humanChoiceText.textContent = showSelectionHuman(selectionHuman);
        computerChoiceText.textContent = showSelectionComputer(selectionComputer);
        roundWinnerText.textContent = "It's a tie!";
    } else if (
        (selectionHuman === "rock" && selectionComputer === "paper") ||
        (selectionHuman === "paper" && selectionComputer === "scissors") ||
        (selectionHuman === "scissors" && selectionComputer === "rock")
    ) {
        roundWinner = "computer";
        humanChoiceText.textContent = showSelectionHuman(selectionHuman);
        computerChoiceText.textContent = showSelectionComputer(selectionComputer);
        roundWinnerText.textContent = `You lose, ${selectionComputer} beats ${selectionHuman}!`
    } else if (
        (selectionHuman === "rock" && selectionComputer === "scissors") ||
        (selectionHuman === "paper" && selectionComputer === "rock") ||
        (selectionHuman === "scissors" && selectionComputer === "paper")
    ) {
        roundWinner = "human";
        humanChoiceText.textContent = showSelectionHuman(selectionHuman);
        computerChoiceText.textContent = showSelectionComputer(selectionComputer);
        roundWinnerText.textContent = `You won, ${selectionHuman} beats ${selectionComputer}!`
    }
    return roundWinner;
}

//5 rounds game
// function playGame() {
//     let scoreComputer = 0;
//     let scoreHuman = 0;
//     let roundWinner;

//     for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
//         roundWinner = playRound();
//         switch(roundWinner) {
//             case "tie":
//                 console.log(`Computer score - ${scoreComputer}, your score ${scoreHuman}`);
//                 break;
//             case "computer":
//                 scoreComputer += 1;
//                 console.log(`Computer score - ${scoreComputer}, your score ${scoreHuman}`);
//                 break;
//             case "human":
//                 scoreHuman += 1;
//                 console.log(`Computer score - ${scoreComputer}, your score ${scoreHuman}`);
//                 break;
//         }
//     }

//     if (scoreHuman > scoreComputer) {
//         console.log("You won the game!");
//     } else if (scoreHuman< scoreComputer) {
//         console.log("You lose the game!");
//     } else {
//         console.log("It's a tie!");
//     }
// }

const buttonChoice = document.querySelectorAll('.button');
const humanChoiceText = document.querySelector('.humanChoice');
const computerChoiceText = document.querySelector('.computerChoice');
const roundWinnerText = document.querySelector('.winner')

buttonChoice.forEach((button) => {
    button.addEventListener('click', () => {
        let selectionHuman = button.textContent.toLowerCase();
        playRound(selectionHuman);
    });
});