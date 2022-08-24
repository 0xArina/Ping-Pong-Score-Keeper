// selecting queries
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// variables to track score 
let p1Score = 0;
let p2Score = 0;

// creating default winning score
let winningScore = 3;

// check if game over
let isGameOver = false;

// player 1
p1Button.addEventListener('click', function (e) {
    // if game is not over
    if (!isGameOver) {
        // increment score
        p1Score += 1;
        // check if score hit winning score 
        if (p1Score === winningScore) {
            // game over
            isGameOver = true;
            // change p1 display to green color and p2 to red
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            // disable buttons with Bulma
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        // change display to the current score
        p1Display.textContent = p1Score;
    }
});

// player 2
p2Button.addEventListener('click', function (e) {
    // if game is not over
    if (!isGameOver) {
        // increment score
        p2Score += 1;
        // check if score hit winning score 
        if (p2Score === winningScore) {
            // game over
            isGameOver = true;
            // change p2 display to green color and p1 to red
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            // disable buttons with Bulma
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        // change display to the current score
        p2Display.textContent = p2Score;
    }
});

// choose what score to play to (winning score)
winningScoreSelect.addEventListener('change', function () {
    // this refers to specific object that we are listening for
    // parse string to integer
    winningScore = parseInt(this.value);
    // reset game
    reset();
});

// reset button
resetButton.addEventListener('click', reset);

// function that resets score
function reset() {
    // start new game
    isGameOver = false;
    // reset scores to 0 
    p1Score = 0;
    p2Score = 0;
    // update display to 0
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    // remove green and red colors from score
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    // undisable buttons with Bulma
    p1Button.disabled = false;
    p2Button.disabled = false;

}