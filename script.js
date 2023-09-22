//Model
let app = document.getElementById("app");
let colors = ["red", "green", "blue", "yellow"];
let toggleColor = [];
let userToggleColor = [];
let score = 0;

//View
updateView();
function updateView() {
    app.innerHTML = /*html*/ `
        <p>Poengsum: <span id="score">0</span></p>
        <div class="container">
            <div class="square" id="red"></div>
            <div class="square" id="green"></div>
            <div class="square" id="blue"></div>
            <div class="square" id="yellow"></div>
        </div>
    `;
}

//Controller
function getRandomColor() {
    randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function addToToggleColor() {
    toggleColor.push(getRandomColor());
    playToggleColor();
}

function playToggleColor() {
    let i = 0;
    let interval = setInterval(() => {
        blink(toggleColor[i]);
        i++;
        if (i >= toggleColor.length) {
            clearInterval(interval);
        }
    }, 1000);
    userToggleColor = [];
}

function blink(color) {
    let square = document.getElementById(color);
    square.style.opacity = 1;
    setTimeout(() => {
        square.style.opacity = 0.5;
    }, 500);
}

function checkUserInput() {
    for (let i = 0; i < userToggleColor.length; i++) {
        if (userToggleColor[i] !== toggleColor[i]) {
            alert("Feil! Spillet er over. Poengsum: " + score);
            resetGame();
            return;
        }
    }

    if (userToggleColor.length === toggleColor.length) {
        score++;
        document.getElementById("score").textContent = score;
        addToToggleColor();
    }
}

function handleClick(event) {
    let clickedColor = event.target.id;
    userToggleColor.push(clickedColor);
    blink(clickedColor);
    checkUserInput();
}

function resetGame() {
    toggleColor = [];
    userToggleColor = [];
    score = 0;
    document.getElementById("score").textContent = score;
    addToToggleColor();
}

document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("click", handleClick);
});

resetGame();
