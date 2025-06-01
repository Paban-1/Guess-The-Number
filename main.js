let randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //validate value 1-100 or any value here or not
    if (isNaN(guess)) {
        alert('Pleses enter a valid number')
    } else if (guess < 1) {
        alert('Pleses enter a number grater than 1')
    } else if (guess > 100) {
        alert('Pleses enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMassege(`Game Over, Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    //the value show is user win or not
    if (guess === randomNumber) {
        displayMassege(`You Guessed it🥳`)
        endGame()
    } else if (guess < randomNumber) {
        displayMassege('Number is TOOOOOO Low')
    } else if (guess > randomNumber) {
        displayMassege('Number is TOOOOO High')
    }
}
function displayGuess(guess) {
    //clane value update value
    userInput.value = ''
    guesSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${12 - numGuess}`
}
function displayMassege(massege) {
    //display low or hi?
    lowOrHi.innerHTML = `<h2>${massege}</h2>`
}
function endGame() {
    //This End games
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start new Game</h3>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}
function newGame() {
    // start new game
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuess = 1
        guesSlot.innerHTML = ''
        remaining.innerHTML = `${12 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}