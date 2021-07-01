// score counter
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

// buttons
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');

// max score selector
const winningScoreSelect = document.querySelector('#maxPoints');

// initial variables
// let winningScoreSelect,value = 'placeholder';
let winningScore = 0;
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;



// max score selector logic
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    resetGame();
});

// // buttons disabled until max score is selected
// if (winningScoreSelect.value === 'placeholder') {
//     p1Button.disabled = true;
//     p2Button.disabled = true;
// } else {
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }

// player 1 score incrementer
p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score ++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
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
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

// reset function
function resetGame() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('loser', 'winner');
    p1Button.disabled = false;
    p2Button.disabled = false;
};

// reset both scores and selector
reset.addEventListener('click', function() {
    resetGame();
    winningScoreSelect.value = 'placeholder';
});