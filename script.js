/* GET A RANDOM CHOICE FOR THE COMPUTER */
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* GET THE HUMAN PLAYER'S CHOICE */
function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice.toLowerCase();
}

/* PLAY A SINGLE ROUND */

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    console.log(`Player: ${humanChoice} | Computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

/* PLAY FIVE ROUNDS AND DECLARE THE WINNER */

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    console.log(`Player: ${humanChoice} | Computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game ended in a draw!");
    }
}

playGame();