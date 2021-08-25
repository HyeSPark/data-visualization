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
    
    // 1. Add the history of user's guess
    // - in the arrGuesses array
    // ********************
    // ** implement here **
    // ********************
    // hint : arrGuesses.push(...);
    console.log(arrGuesses);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    // 2. Add the string of current guess (i.e. userGuess) in the document
    // ********************
    // ** implement here **
    // ********************
    // hint : guesses.textContent += ...
    
    if (userGuess === randomNumber) {
        lastResult.textContent = ' ** change here ** '; // 3. What is the lastResult Node? What should its text be?
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        // 1. Add the history of user's guess
        // - in the objGuesses object, the field is correct
        // ********************
        // ** implement here **
        // ********************
        // hint : objGuesses["correct"] = ... ;
        console.log(objGuesses)
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '  ** change here ** ';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = '  ** change here ** ';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!' ;
            // 1. Add the history of user's guess
            // - in the objGuesses object, the field is low
            // ********************
            // ** implement here **
            // ********************
            // hint : objGuesses["low"].push(..);
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
            // 1. Add the history of user's guess
            // - in the objGuesses object, the field is high
            // ********************
            // ** implement here **
            // ********************
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    return // delete when you implement here
    // ********************************************
    // ** Uncomment below and fill in the blanks **
    // ********************************************
    
    // // disable the guess field and guess submit
    // guessField.disabled = ... ;
    // guessSubmit.disabled = ... ;

    // // create the button element, resetButton
    
    
    // resetButton = document.createElement('button');
    // resetButton.textContent = 'Start new game';
    // // append the button on the document
    // document.body.appendChild(...);
    // // add the event listener as clicking it, and bind it into the function, resetGame()
    // // ********************
    // // ** implement here **
    // // ********************
}

function resetGame() {
    return // delete when you implement here
    // ********************************************
    // ** Uncomment below and fill in the blanks **
    // ********************************************

    // // reset the guess count
    // guessCount = 1;
    // const resetParas = document.querySelectorAll('.resultParas p');
    // // for all the selected queries in resetParas
    
    // for (...) {
    //     resetParas[i].textContent = '';
    // }

    // resetButton.parentNode.removeChild(...);

    // //enavle the guess field, submit
    // guessField.disabled = false;
    // guessSubmit.disabled = false;
    // guessField.value = '';
    // guessField.focus();
    // lastResult.style.backgroundColor = 'white';
    // // make the random number
    // randomNumber = Math.floor(Math.random() * 100) + 1;
}
