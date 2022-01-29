import { Tetrominos } from "./tetrominos";
export const S_WIDTH = 10;
export const S_HEIGHT = 20;


export const Createstage = (h = S_HEIGHT, w = S_WIDTH) =>
    Array.from(Array(h), () => new Array(w).fill([0, "clear"]));

export const checkcollision = (player, stage, { x: moveX, y: moveY }) => {
    // Использование цикла for для возможности возврата (и прерывания). Невозможно с forEach
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino.length; x++) {
            // 1. Проверяем, что мы находимся в текущей ячейке Тетромино
            if (player.tetromino[y][x] !== 0) {
                // 2. Проверяем, что наш ход находится внутри высоты игровых площадок (y)
                // Что мы не проходим низ игровой зоны
                if (!stage[y + player.pos.y + moveY] ||
                    // 3. Проверяем, что наш ход находится внутри ширины игровых зон (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. Проверяем, что ячейка, в которую мы двигаемся, не установлена ​​на очистку(clear)
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== "clear"
                )
                    return true;
            }
        }
    }
    // 5. Если все вышеперечисленное неверно
    return false;
};