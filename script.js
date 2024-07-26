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

function playGame(selectionHuman) {
    roundWinner = playRound(selectionHuman);
    switch(roundWinner) {
        case "tie":
            scoreText.textContent = `Computer score - ${scoreComputer}, your score - ${scoreHuman}`;
            break;
        case "computer":
            scoreComputer += 1;
            scoreText.textContent = `Computer score - ${scoreComputer}, your score - ${scoreHuman}`;
            break;
        case "human":
            scoreHuman += 1;
            scoreText.textContent = `Computer score - ${scoreComputer}, your score - ${scoreHuman}`;
            break;
    }
}

function restartGame () {
    roundNumber = 1;
    scoreComputer = 0;
    scoreHuman = 0;
    humanChoiceText.textContent = '';
    computerChoiceText.textContent = '';
    roundWinnerText.textContent = '';
    scoreText.textContent = 'Computer score - 0, your score - 0';
    gameWinnerText.textContent = '';
}

const buttonChoice = document.querySelectorAll('.buttonRock, .buttonPaper, .buttonScissors');
const buttonRestart = document.querySelector('.buttonRestart');
const humanChoiceText = document.querySelector('.humanChoice');
const computerChoiceText = document.querySelector('.computerChoice');
const roundWinnerText = document.querySelector('.roundWinner');
const scoreText = document.querySelector('.score');
const gameWinnerText = document.querySelector('.gameWinner');

let scoreComputer = 0;
let scoreHuman = 0;
let roundNumber = 1;

buttonChoice.forEach((button) => {
    button.addEventListener('click', () => {
        let selectionHuman = button.textContent.toLowerCase();
        console.log(roundNumber);
        if (roundNumber < 5) {
            playGame(selectionHuman);
            roundNumber++;
        } else if (roundNumber = 5) {
            playGame(selectionHuman);
            roundNumber++;
            if (scoreHuman > scoreComputer) {
                gameWinnerText.textContent = 'You won the game!';
                setTimeout(() => restartGame(), 4000);
            } else if (scoreHuman < scoreComputer) {
                gameWinnerText.textContent = 'You lose the game!';
                setTimeout(() => restartGame(), 4000);
            } else {
                gameWinnerText.textContent = 'It\'s a tie!';
                setTimeout(() => restartGame(), 4000);
            }
        }
    });
});

buttonRestart.addEventListener('click', () => {
    roundNumber = 1;
    scoreComputer = 0;
    scoreHuman = 0;
    humanChoiceText.textContent = '';
    computerChoiceText.textContent = '';
    roundWinnerText.textContent = '';
    scoreText.textContent = 'Computer score - 0, your score - 0';
    gameWinnerText.textContent = '';
});