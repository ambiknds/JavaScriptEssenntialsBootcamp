
let luckyNumber = Math.floor(Math.random()* 10);
// function randomIntFromInterval(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
//   let luckyNumber = randomIntFromInterval(0,10)
//   console.log(luckyNumber)
let guessAttempt = 10;
let highScore = 0;

const userInputField = document.getElementById('guessing')
const checkButton = document.getElementById('check')
const messBox = document.getElementById('message')
const main = document.getElementById('main')
const scoreSection = document.getElementById('guessAttempt')
const highScoreSection = document.getElementById('highscore')

const WIN_MESSAGE = 'You Guess the right Number'
const LOW_MESSAGE = 'Too Low'
const HIGH_MESSAGE = 'Too High'
const OUT_OF_GUESS_MESSAGE = 'You have run out of guesses!'
const OUT_OF_RANGE = 'Please enter a number between 0 and 10'

const checkFunction = () => {
   
    const userGuess = Number(userInputField.value)
    if(userGuess >= 10 || userGuess < 0){
        messBox.textContent = OUT_OF_RANGE
        main.style.backgroundColor = '#333'
        guessAttempt = guessAttempt - 1;
    }
    else {
        if(userGuess == luckyNumber){
            messBox.textContent = WIN_MESSAGE;
            main.style.backgroundColor = '#367e18'
            // guessAttempt = guessAttempt + 1;
            highScore = highScore +1;
           
        } else if (userGuess > luckyNumber){
            messBox.textContent = HIGH_MESSAGE
            main.style.backgroundColor = '#dd5353';
            guessAttempt = guessAttempt - 1;
        } else if (userGuess < luckyNumber){
            messBox.textContent = LOW_MESSAGE
            main.style.backgroundColor = '#dd5353'
            guessAttempt = guessAttempt - 1;
        }else {
            messBox.textContent = 'Enter the Correct Number'
            main.style.backgroundColor = '#dd5353'
            guessAttempt = guessAttempt - 1;
        }
    }
    scoreSection.textContent = guessAttempt; 
    highScoreSection.textContent = highScore;
    if(guessAttempt < 1){
        messBox.textContent = OUT_OF_GUESS_MESSAGE;
        guessAttempt = 1
    }
}

checkButton.addEventListener('click', checkFunction)
