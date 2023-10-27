let gameBoard = ['', '', '', '', '', '', '', '', ''];

function checkWinner() {
    for (let pattern of WIN_PATTERNS) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            winner(pattern);
            return gameBoard[a];
        }
    }
    if (!gameBoard.includes('')) {
        return 'draw';
    }

    return null;
}

function winner(patterns) {
    for (let pattern of patterns) {
        cells[pattern].querySelector(".back").style.background='rgba(115, 220, 79, 0.72)';
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    for (let cell of cells) {
        cell.classList.remove("flipped");
        cell.querySelector(".back").style.background="white";
    }
}