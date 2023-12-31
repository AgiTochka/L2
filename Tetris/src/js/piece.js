class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }
    spawn() {
        this.typeId = this.randomizeTetrominoType(COLOR.length - 1);
        this.shape = FIGURE[this.typeId].shape;
        this.color = COLOR[this.typeId];
        this.x = 0;
        this.y = 0;
    }

// расположить фигурку в центре поля
    setStartPosition() {
        this.x = this.typeId === 4 ? 4 : 3;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                // this.x, this.y - левый верхний угол фигурки на игровом поле
                // x, y - координаты ячейки относительно матрицы фигурки (3х3)
                // this.x + x - координаты ячейки на игровом поле
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }
    move(p) {
        this.x = p.x;
        this.y = p.y;
        this.shape = p.shape;
    }
    // параметр noOfTypes - количество вариантов
    randomizeTetrominoType(noOfTypes) {
        return Math.floor(Math.random() * noOfTypes);
    }
}