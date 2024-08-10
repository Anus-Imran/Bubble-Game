let randonBubbles = document.querySelector(".gameBubbles");
let hit = document.querySelector(".hit div");

let timer = 60;
let score = 0;
let randomNumbers = 0;
let timerInt;

function increasedScore() {
    score += 10;
    document.querySelector(".score div").textContent = score;
}

function makeBubble() {
    randonBubbles.innerHTML = "";
    for (let i = 0; i < 168; i++) {
        var randomNo = Math.floor(Math.random() * 10);
        randonBubbles.innerHTML += `<div class="bubble">${randomNo}</div>`;
    }
}

function runTimer() {
    timer = 60;
    document.querySelector(".timer div").innerText = timer;
    timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timer div").innerText = timer;
        } else {
            clearInterval(timerInt);
            gameOver();
        }
    }, 1000);
}

function getNewHit() {
    randomNumbers = Math.floor(Math.random() * 10);
    hit.innerText = randomNumbers;
}

function resetGame() {
    score = 0;
    document.querySelector(".score div").textContent = 0;
    document.querySelector(".hit div").textContent = 0;
    makeBubble();
    getNewHit();
    runTimer();
}

function gameOver() {
    document.querySelector(".gameBubbles").innerHTML = `
        <h1 id="overGame">Game Over</h1>
        <div class="msgContainer">
        <p id="scorePrint">Your score is <span>${score}</span></p>
        <button id="playAgain">Play Again</button></div>
    `;
    document.querySelector(".hit div").textContent = 0;
    document.querySelector(".score div").textContent = 0;
    document.querySelector("#playAgain").addEventListener("click", function () {
        resetGame();
    });
}

document.querySelector(".gameBubbles").addEventListener("click", function (event) {
    let clickedNum = Number(event.target.textContent);
    if (clickedNum === randomNumbers) {
        increasedScore();
        makeBubble();
        getNewHit();
    }
});

makeBubble();
getNewHit();
runTimer();
