//Model
let app = document.getElementById("app");

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
