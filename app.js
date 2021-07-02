// player 1 object
 const p1 = {
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button'),
    score: 0,
};

// player 2 object
const p2 = {
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button'),
    score: 0,
};

// reset button
const reset = document.querySelector('#reset');

// max score selector
const winningScoreSelect = document.querySelector('#maxPoints');

// initial variables
let winningScoreSelect,value = 'placeholder';
let winningScore = 0;
let isGameOver = false;

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

// score update function
function updateScores(winner, loser) {
    if (!isGameOver) {
        winner.score ++;
        if (winner.score === winningScore) {
            isGameOver = true;
            winner.display.classList.add('has-text-success');
            loser.display.classList.add('has-text-danger');
            winner.button.disabled = true;
            loser.button.disabled = true;
        }
        winner.display.textContent = winner.score;
    }
};

// player 1 wins round
p1.button.addEventListener('click', function() {
    updateScores(p1, p2)
});

// player 2 wins round
p2.button.addEventListener('click', function() {
    updateScores(p2, p1)
});

// reset function
function resetGame() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = '0';
    p2.display.textContent = '0';
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-danger', 'has-text-success');
    p1.button.disabled = false;
    p2.button.disabled = false;
};

// reset both scores and selector
reset.addEventListener('click', function() {
    resetGame();
    winningScoreSelect.value = 'placeholder';
});