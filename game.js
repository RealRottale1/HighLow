let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;
let terminated = false;

document.getElementById("button").addEventListener("click", function() {
    if (terminated) {
        return;
    }
    userGuess = document.getElementById("input").value;
    const numberGuess = Number(userGuess);
    if (isNaN(numberGuess)) {
        document.getElementById("p").textContent = "Invalid Input!";
    } else {
        if (numberGuess == 999) {
            document.getElementById("p").textContent = "Game Terminated!";
            terminated = true;
        } else {
            attempts += 1;
            if (numberGuess == randomNumber) {
                document.getElementById("p").textContent = `You Guessed The Correct Number (${randomNumber}) In ${attempts} attempt${(attempts === 1 ? "" : "s")}!`;
                terminated = true;
            } else if ( numberGuess > randomNumber) {
                document.getElementById("p").textContent = "Too High!";
            } else {
                document.getElementById("p").textContent = "Too Low!";
            }
        }
    }

});

// Prompt user for a number between 1 and 10, or type 999 to exit.
 
// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.