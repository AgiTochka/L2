const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 40;
const POINTS = {
    SINGLE: 100,
    DOUBLE: 300,
    TRIPLE: 500,
    TETRIS: 800,
    SOFT_DROP: 1,
    HARD_DROP: 2
}
Object.freeze(POINTS);

const KEY = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown',
    SPACE: 'Space',
    UP: 'ArrowUp'
}
Object.freeze(KEY);
const COLOR = ["yellow", "blue", "red", "green", "orange", "indigo", "violet"]
const FIGURE = [
    {//O или Q
        shape: [
            [1, 1],
            [1, 1]]
    },
    {//I
        shape: [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]
    },
    {//L
        shape: [
            [0, 0, 3],
            [3, 3, 3],
            [0, 0, 0]]
    },
    {//J
        shape: [
            [4, 0, 0],
            [4, 4, 4],
            [0, 0, 0]]
    },
    {//T
        shape: [
            [5, 5, 5],
            [0, 5, 0],
            [0, 0, 0]]
    },
    {//S
        shape: [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0]]
    },
    {//Z
        shape: [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0]]
    }
];
