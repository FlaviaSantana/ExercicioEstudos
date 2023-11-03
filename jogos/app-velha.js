

//https://www.youtube.com/watch?v=ohl1tK-azxw

const currentPlayer = document.querySelector(".currentPlayer");

let jogador1 = document.createElement('img')
jogador1.src = 'imagens/x.png'
jogador1.className = 'img-j'
jogador1.style.position = 'absolute'
let jogador2 = document.createElement('img')
jogador2.src = 'imagens/o.png'
jogador2.className = 'img-j'
jogador2.style.position = 'absolute'



let selected;
let player = jogador1;



let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function init() {
    selected = [];

    currentPlayer.innerHTML = 'Jogador da Vez: ' + player;

    document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
});
}

init();

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selected[index] = player;

    setTimeout (() => {
        check();
    }, [100]);

    player = player === jogador1 ? jogador2 : jogador1;
    currentPlayer.innerHTML ='Jogador da Vez: ' + player;
    
}

function check() {
    let playerLastMove = player === jogador1  ? jogador2 : jogador1;

    const itens = selected
    .map((item, i) => [item, i])
    .filter((item) =>item[0] === playerLastMove)
    .map((item) => item[1]);

    for (pos of positions) {
        if (pos.every((item) => itens.includes(item))) {
            alert('O jogador ' + playerLastMove + 'ganhou!');
            init();
            return;
        }
    }

    if (selected.filter((item) => item).length === 9) {
        alert('Deu empate');
        init();
        return;
    }
}

