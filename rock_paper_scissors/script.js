/**
 * This function returns a random choice from an array of choices.
 * @returns {string} - A random choice of "rock", "paper", or "scissors"
 */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // const randomIndex = Math.floor(Math.random() * choices.length);
    // return choices[randomIndex];
    return choices[Math.floor(Math.random() * choices.length)]; // returns a random choice from the available choices
  }

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper.";
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
  }

/**
 * Prompts the user for a choice of "rock", "paper", or "scissors" until a valid choice is made.
 * 
 * @returns {string} - A user-selected choice of "rock", "paper", or "scissors"
 */
function promptUserChoice() {
    const validChoices = {
        'r': 'rock',
        'p': 'paper',
        's': 'scissors'
    };
    let userChoice = window.prompt("Enter 'r' for rock, 'p' for paper, or 's' for scissors: ")

    if (userChoice === null) {
        return null; // The user hit cancel
    }

    userChoice = userChoice.trim().toLowerCase();

    if (!Object.keys(validChoices).includes(userChoice)) {
        alert(`Invalid choice. Please enter 'r' for rock, 'p' for paper, or 's' for scissors.`);
        return promptUserChoice();
    }

    return validChoices[userChoice];
}

let getPlayerSelection = promptUserChoice();

if (getPlayerSelection === null) {
    console.log("The user chose to exit the game.");
}

console.log(getPlayerSelection);
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));