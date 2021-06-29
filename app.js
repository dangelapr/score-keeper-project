// score counter
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

// buttons
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');

let winningScore = 5;
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;

// player 1 score incrementer
p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score ++;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

// player 2 score incrementer
p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score ++;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

// reset both scores
reset.addEventListener('click', function() {
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
})