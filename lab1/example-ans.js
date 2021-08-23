let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

// arrGuesses is the array that contains the history of guesses
let arrGuesses = [];
// - ex. 
// arrGuesses = [10, 80, 20, 70, 30, 60, 50]

// objGuesses is the object that contains the history of guesses
const objGuesses = {};
objGuesses["low"] = [];
objGuesses["high"] = [];
// - ex.
// objGuesses = {
//     correct: 50,
//     low: [10,20,30],
//     high: [60,70,80]
//     }


function checkGuess() {
    // userGuess is the value of element that has the class of 'guessField';
    let userGuess = Number(guessField.value);
    
    // ** answer **
    arrGuesses.push(userGuess);
    // ************
    console.log(arrGuesses);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    // ** answer **
    guesses.textContent += userGuess + ' ';
    // ************
    
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!'; // << answer
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        // ** answer **
        objGuesses["correct"] = userGuess;
        // ************
        console.log(objGuesses)
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!'; // << answer
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong !'; // << answer
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!' ;
            // ** answer **
            objGuesses["low"].push(userGuess);
            // ************
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
            // ** answer **
            objGuesses["high"].push(userGuess);
            // ************
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    // ********************************************
    // ** Uncomment below and fill in the blanks **
    // ********************************************
    
    // disable the guess field and guess submit
    guessField.disabled = true ; // << answer
    guessSubmit.disabled = true ; // << answer

    // create the button element, resetButton
    
    
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    // append the button on the document
    document.body.appendChild(resetButton); // << answer
    // add the event listener as clicking it, and bind it into the function, resetGame()
    // ** answer **
    resetButton.addEventListener('click', resetGame);
    // ************
}

function resetGame() {

    // reset the guess count
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    // for all the selected queries in resetParas

    for (let i = 0 ; i < resetParas.length ; i++) { // << answer
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton); // << answer

    //enavle the guess field, submit
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    // make the random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
