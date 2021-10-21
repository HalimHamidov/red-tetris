// import { Tetrominos } from "./tetrominos"

//размеры игрового поля
export const S_WIDTH = 10
export const S_HEIGHT = 20

export const Tetrominos = {
    0: {
        shape: [[0]], color: '0, 0, 0'
    },
    I: {
        shape: [
            ['I', 'I', 'I', 'I'],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        color: '255, 13, 114',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color: '13, 255, 114',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color: '13, 194, 255',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        color: '255, 225, 56',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],
        ],
        color: '56, 119, 255',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
        color: '255, 142, 13',
    },
    D: {
        shape: [
            ['D', 'D', 0],
            ['D', 'D', 0],
            [0, 0, 0],
        ],
        color: '245, 56, 255',
    },
};

export const Createstage = () =>
    Array.from(Array(S_HEIGHT), () =>
        new Array(S_WIDTH).fill([0, 'clear']));

        // проверка столкновение
export const checkcollision = (player, stage, {x: moveX, y:moveY}) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino.length; x += 1) {
            if (player.tetromino[y][x] !== 0 ) {
                if (!stage[y + player.pos.y + moveY] || 
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear')
                    return true;
            }
        }
    }
    return false;
};