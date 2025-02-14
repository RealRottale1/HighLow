let randomNumber = Math.ceil(Math.random() * 10);
let attempts = 0;
let guess = window.prompt('Enter a guess for the number between 1 and 999');
guess = Number(guess);
 
 
while (guess != randomNumber || guess != 999){
    if (isNaN(guess)) {
        guess = window.prompt('Invalid Input');
    } else {
        attempts += 1;
        if(guess == 999) {
            window.alert(`You entered 999 breaking out of the game`);
            break;
        } else if (guess == randomNumber) {
            window.alert("You won in"+attempts+" attempts!");
            break;
        } else if (guess > randomNumber) {
            guess = window.prompt('This number is to high, try again');
        }else{
            guess = window.prompt('This number is to low, try again');
        }
    }
}
 