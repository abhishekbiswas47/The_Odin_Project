/**
 * This function returns a random choice from an array of choices.
 * 
 * @returns {string} - A random choice of "rock", "paper", or "scissors"
 */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // const randomIndex = Math.floor(Math.random() * choices.length);
    // return choices[randomIndex];
    return choices[Math.floor(Math.random() * choices.length)]; // returns a random choice from the available choices
  }

/**
 * Prompts the user for a choice of "rock", "paper", or "scissors" until a valid choice is made.
 * 
 * @returns {string} - A user-selected choice of "rock", "paper", or "scissors"
 */
function getUserChoice() {
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
        return getUserChoice();
    }

    return validChoices[userChoice];
}

/**
 * The game function runs the rock-paper-scissors game for 5 rounds. 
 * In each round, the function prompts the user for their choice and randomly selects a choice for the computer.
 * The function then compares the choices and updates the score based on the outcome of the round. 
 * If the user chooses to cancel the game by pressing 'cancel' during the prompt, the game ends immediately.
 * After all rounds are over, or the user cancels the game, the function prints out the final scores and announces the winner or a draw.
 * 
 * @returns {void} - This function does not return anything.
 */

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = getUserChoice();
        computerSelection = getComputerChoice();

        if (playerSelection === null) {
            console.log("The user chose to exit the game.");
            break;
        }

        if (playerSelection === computerSelection) {
            console.log("Tie!");
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore += 1;
            console.log("You win this round!");
        } else {
            computerScore += 1;
            console.log("Computer wins this round!");
        }
    }
    console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a draw!");
    }
}

game();