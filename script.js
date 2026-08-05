// COMPUTER CHOICE

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";

    return "scissors";
}

// SCORE

let playerScore = 0;
let computerScore = 0;

// BUTTONS

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

// RESULT AREA

const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

// SCORE AREA

const scoreDiv = document.createElement("div");
scoreDiv.textContent = "Player: 0 | Computer: 0";
document.body.appendChild(scoreDiv);

// CHECK WINNER

function hasPlayerWonTheRound(playerChoice, computerChoice) {
    return (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    );
}

// PLAY ROUND

function playRound(userOption) {

    const computerChoice = getComputerChoice();

    if (hasPlayerWonTheRound(userOption, computerChoice)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerChoice}`;
    }

    if (userOption === computerChoice) {
        return `It's a tie! Both chose ${userOption}`;
    }

    computerScore++;
    return `Computer wins! ${computerChoice} beats ${userOption}`;
}

// SHOW RESULTS

function showResult(userOption) {

    if (playerScore >= 5 || computerScore >= 5) return;

    resultDiv.textContent = playRound(userOption);

    scoreDiv.textContent =
        `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5) {
        resultDiv.textContent += "\n\nPlayer has won the game!";

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

    if (computerScore === 5) {
        resultDiv.textContent += "\n\nComputer has won the game!";

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

// EVENTS

rockBtn.addEventListener("click", () => showResult("rock"));
paperBtn.addEventListener("click", () => showResult("paper"));
scissorsBtn.addEventListener("click", () => showResult("scissors"));





