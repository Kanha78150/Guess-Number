'use strict';
let score = 20;
let highscore = 0;

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;

// Display messages function
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

// Score
const displayScore = function (scoreValue) {
    document.querySelector(".score").textContent = scoreValue;
}

// Number
const displayNumber = function (numberValue) {
    document.querySelector(".number").textContent = numberValue;
}
// Number Style change
const displayNumberStyle = function (numberStyle) {
    document.querySelector(".number").style.width = numberStyle;
}

document.querySelector(".check").addEventListener("click", function () {

    let guessNumber = Number(document.querySelector(".guess").value);
    if (!guessNumber) {
        displayMessage("Please Enter a valid number");
    }

    else if (guessNumber > 20) {
        displayMessage("Please Enter Number Between 1 and 20 ‼️");
    }

    // Checking the correct answer
    else if (guessNumber === hiddenNumber) {
        displayMessage("🎉Correct Number");
        score++;

        displayScore(score);
        document.querySelector("body").style.backgroundColor = "#60b347";
        displayNumberStyle("30rem");
        displayNumber(hiddenNumber);

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    else if (guessNumber !== hiddenNumber) {
        if (score > 1) {
            displayMessage(guessNumber > hiddenNumber ? "Too High 📈" : "Too Low 📉");
            score--;
            displayScore(score);
        }
        else {
            displayMessage("💥Game Over!!💥");
            displayScore(0);
        }

    }

});

// Reset Functionality
document.querySelector(".again").addEventListener('click', function () {
    score = 20;
    hiddenNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    displayScore(score);

    displayNumber("?");
    displayNumberStyle("15rem");
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";

});