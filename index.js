const allSquares = document.querySelectorAll(".square");
const resultado = document.querySelector("#resultado");
const playerText = document.querySelector("#player");

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const arrO = [];
const arrX = [];

let jogando = true;
let jogadorAtual = "O";
let player = 1;
let vencedor = false;

allSquares.forEach((el, i) => {
    el.addEventListener("click", () => {
        if (arrO.length == 5 && arrX.length == 4) {
            jogando = false;
            resultado.textContent = `Deu velha!`;
            playerText.innerHTML = `<button id="newGame">Novo jogo</button>`;
        }

        if (!el.textContent && jogando) {
            el.textContent = jogadorAtual;

            if (el.textContent === "O") jogo(arrO, i, "O");
            if (el.textContent === "X") jogo(arrX, i, "X");

            if (vencedor) {
                playerText.innerHTML = `<button id="newGame">Novo jogo</button>`;
            } else {
                jogadorAtual = jogadorAtual === "O" ? "X" : "O";
                player = player === 1 ? 2 : 1;
                playerText.textContent = `Jogador ${player}`;
            }
        }
    });
});

function jogo(arr, i, valor) {
    arr.push(i);

    wins.forEach((win) => {
        if (win.every((n) => arr.includes(n))) {
            resultado.textContent = `${valor} ganhou!`;
            vencedor = true;
            jogando = false;
        }
    });
}

document.addEventListener("click", (e) => {
    if (e.target.id == "newGame") {
        location.reload();
    }
});
