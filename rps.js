function getComputerChoice() {
    let numberChoice = Math.random() * 3;
    if ((0 <= numberChoice) && (numberChoice < 1)) {
        return "Rock";
    }
    else if ((1 <= numberChoice) && (numberChoice < 2)) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("1. Rock\n2. Paper\n3. Scissors");
    switch (choice) {
        case "1":
            return "Rock";
        case "2":
            return "Paper";
        case "3":
            return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const textlog = document.querySelector("#textlog");
    const humanscore = document.querySelector("#humanscore");
    const compscore = document.querySelector("#compscore");
    const msg = document.createElement("p");
    switch (humanChoice) {
        case "Rock":
            if (computerChoice == "Paper") {
                msg.textContent = "You lose, they chose Paper";
                computerScore += 1;
            }
            else if (computerChoice == "Scissors") {
                msg.textContent = "You win, they chose Scissors";
                humanScore += 1;
            }
            else {
                msg.textContent = "Tie";
            }
            break;
        case "Paper":
            if (computerChoice == "Scissors") {
                msg.textContent = "You lose, they chose Scissors";
                computerScore += 1;
            }
            else if (computerChoice == "Rock") {
                msg.textContent = "You win, they chose Rock";
                humanScore += 1;
            }
            else {
                msg.textContent = "Tie";
            }
            break;
        case "Scissors":
            if (computerChoice == "Rock") {
                msg.textContent = "You lose, they chose Rock";
                computerScore += 1;
            }
            else if (computerChoice == "Paper") {
                msg.textContent = "You win, they chose Paper";
                humanScore += 1;
            }
            else {
                msg.textContent = "Tie";
            }
            break;
    }
    textlog.appendChild(msg);
    humanscore.textContent = "Your Score: " + humanScore;
    compscore.textContent = "Computer Score: " + computerScore;

    if (humanScore == 5) {
        const wintext = document.createElement("p");
        wintext.textContent = "You Win!";
        textlog.appendChild(wintext);
    }
    else if (computerScore == 5) {
        const wintext = document.createElement("p");
        wintext.textContent = "You Lose :(";
        textlog.appendChild(wintext);
    }


}

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", function() {
    playRound("Rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function() {
    playRound("Paper", getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function() {
    playRound("Scissors", getComputerChoice());
});

