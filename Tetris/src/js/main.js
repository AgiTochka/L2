const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры холста
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Устанавливаем масштаб
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board(ctx);


const moves = {
    [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]:  p => ({ ...p, y: p.y + 1 }),
    [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
    [KEY.UP]:   (p) => board.rotate(p)
};
document.addEventListener('keydown', event => {

    if (moves[event.code]) {
        // отмена действий по умолчанию
        event.preventDefault();

        // получение новых координат фигурки
        let p = moves[event.code](board.piece);


        if (event.code === KEY.SPACE) {
            while (board.valid(p)) {
                account.score += POINTS.HARD_DROP;
                board.piece.move(p);
                p = moves[KEY.DOWN](board.piece);
            }
        } else if (board.valid(p)) {
            board.piece.move(p);
            if (event.code === KEY.DOWN) {
                account.score += POINTS.SOFT_DROP;
            }
        }
    }
});
const time = { start: 0, elapsed: 0, level: 1000 };

function play() {
    board.reset();
    let piece = new Piece(ctx);
    board.piece = piece;
    board.piece.setStartPosition();
    animate();
}
let accountValues = {
    score: 0,
}
// Обновление данных на экране
function updateAccount(key, value) {
    let element = document.getElementById(key);
    if (element) {
        element.textContent = value;
    }
}

// Проксирование доступа к свойствам accountValues
let account = new Proxy(accountValues, {
    set: (target, key, value) => {
        target[key] = value;
        updateAccount(key, value);
        return true;
    }
});
let requestId;

function gameOver() {
    cancelAnimationFrame(requestId);
   alert("Game Over!")
}

function animate(now = 0) {
    time.elapsed = now - time.start;
    if (time.elapsed > time.level) {
        time.start = now;

        if (!board.drop()) {
            gameOver();
            return;
        }
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    board.draw();
    requestId = requestAnimationFrame(animate);
}

