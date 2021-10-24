import { Tetrominos } from "./tetrominos";
export const S_WIDTH = 10;
export const S_HEIGHT = 20;


export const Createstage = (h = S_HEIGHT, w = S_WIDTH) =>
  Array.from(Array(h), () => new Array(w).fill([0, "clear"]));

export const checkcollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino.length; x++) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        )
          return true;
      }
    }
  }
  return false;
};
