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

function playGame() {

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "Rock":
                if (computerChoice == "Paper") {
                    console.log("You lose, they chose Paper");
                    computerScore += 1;
                }
                else if (computerChoice == "Scissors") {
                    console.log("You win, they chose Scissors");
                    humanScore += 1;
                }
                else {
                    console.log("Tie");
                }
                break;
            case "Paper":
                if (computerChoice == "Scissors") {
                    console.log("You lose, they chose Scissors");
                    computerScore += 1;
                }
                else if (computerChoice == "Rock") {
                    console.log("You win, they chose Rock");
                    humanScore += 1;
                }
                else {
                    console.log("Tie");
                }
                break;
            case "Scissors":
                if (computerChoice == "Rock") {
                    console.log("You lose, they chose Rock");
                    computerScore += 1;
                }
                else if (computerChoice == "Paper") {
                    console.log("You win, they chose Paper");
                    humanScore += 1;
                }
                else {
                    console.log("Tie");
                }
                break;
        }
    }

    let humanScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("Your Score: " + humanScore + "\nComputer Score: " + computerScore);
}

playGame();
