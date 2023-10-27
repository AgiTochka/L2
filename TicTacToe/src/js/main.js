const cells = document.getElementsByClassName('cell');
const result = document.getElementById('result');
let count = 0;
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function () {
        gameBoard[i] = count % 2 + 1;
        const winner = checkWinner();
        if (winner) {
            if (winner === 'draw') {
                result.innerText = 'Ничья!';
            } else {
                result.innerText = `Игрок ${winner} выиграл!`;
            }
        }
        cells[i].classList.add('flipped');
        if (count % 2 === 0) {
            cells[i].querySelector(".back").querySelector("img").src = URL_X;
        } else {
            cells[i].querySelector(".back").querySelector("img").src = URL_O;
        }
        count++;
    });
}

const restart = document.getElementById('btn');
restart.addEventListener('click', function () {
    resetGame();
    count = 0;
    result.innerText = "";
})