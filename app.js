// reset on page load
window.onload = function() {
    resetGame();
};

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

// start selector at placeholder
winningScoreSelect.value = 'placeholder';

// initial variables
let winningScore = 0;
let isGameOver = false;

// max score selector logic
winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    resetGame();
});

// buttons disabled until max score is selected
if (winningScoreSelect.value === 'placeholder') {
    p1Button.disabled = true;
    p2Button.disabled = true;
} else {
    p1Button.disabled = false;
    p2Button.disabled = false;
}

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
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = '0';
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false
    };
};

// reset both scores and selector
reset.addEventListener('click', function() {
    resetGame();
    winningScoreSelect.value = 'placeholder';
});