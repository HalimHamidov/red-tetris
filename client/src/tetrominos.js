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

// export const randomTetromino = () => {
//     const tetrominoStr = "IJLSTZD";
//     const randomTetro = tetrominoStr[Math.floor(Math.random() * tetrominoStr.length)];
//     return Tetrominos[randomTetro];
// }
// const randomIntFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   var pieces = [];
//   export const randomTetromino = () => {
//     if (pieces.length === 0)
//       pieces = ["I", "I", "I", "I", "J", "J", "J", "J", "L", "L", "L", "L", "D", "D", "D", "D", "S", "S", "S", "S", "T", "T", "T", "T", "Z", "Z", "Z", "Z"];
//     const randomTetro = pieces.splice(randomIntFromInterval(0, pieces.length - 1), 1)[0];
//     return Tetrominos[randomTetro];
//   };