import { useState, useCallback } from "react";
import { Tetrominos } from "../tetrominos";
import { S_WIDTH, checkcollision } from "../gameHelper";
import { PLAYER_LOST } from "../actions/playerAction";
import { GAME_OVER } from "../actions/roomAction";

export const usePlayer = (dispatch, roomState) => {
  const [player, setPlayer] = useState({
    pos: {
      x: 2,
      y: 2,
    },
    tetromino: Tetrominos[0].shape,
    collided: false,
  });
  const [NextPlayer, setNext] = useState({
    pos: {
      x: 0,
      y: 0,
    },
    tetromino: null,
    collided: false,
  });
  const rotate = (matrix, dir) => {
    // Make the rows to become cols (transpose)
    const rotatedTetro = matrix.map((_, colIndex) =>
      matrix.map((col) => col[colIndex])
    );
    // Reverse each row to get a rotated matrix
    if (dir > 0) 
      return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage, dir) => {
    let sym = 0;
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    if (clonedPlayer.tetromino.length === 4) {
      for (let i = 0; i < clonedPlayer.tetromino[0].length; i++)
        if (clonedPlayer.tetromino[0][i] !== "I") {
          sym = 1;
          break;
        }
      sym == 1
        ? (clonedPlayer.tetromino = [
          ["I", "I", "I", "I"],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ])
        : (clonedPlayer.tetromino = [
          [0, "I", 0, 0],
          [0, "I", 0, 0],
          [0, "I", 0, 0],
          [0, "I", 0, 0],
        ]);
    } else clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkcollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -1 * offset - (offset > 0 ? 1 : -1);
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
      collided,
    }));
  };

  const resetPlayer = useCallback(
    (stage) => {
      let tet = {
        pos: { x: S_WIDTH / 2 - 1, y: 0 },
        tetromino: Tetrominos[roomState.next_piece[0]]?.shape,
        collided: false,
      };
      roomState.next_piece.shift();
      let playerSet = false;
      if (stage) {
        if (!checkcollision(tet, stage, { x: 0, y: 0 })) {
          setPlayer({
            pos: { x: S_WIDTH / 2 - 1, y: 0 },
            tetromino: tet.tetromino,
            collided: false,
          });
          playerSet = true;
        }
        else {
          dispatch({ type: GAME_OVER })
          dispatch({ type: PLAYER_LOST })
        }
      } else {
        setPlayer({
          pos: { x: S_WIDTH / 2 - 1, y: 0 },
          tetromino: tet.tetromino,
          collided: false,
        });
        playerSet = true;
      }
      setNext({
        pos: { x: 2, y: 2 },
        tetromino: Tetrominos[roomState.next_piece[0]]?.shape,
        collided: false,
      });
    },
    [roomState.next_piece]
  );

  return [player, NextPlayer, updatePlayerPos, resetPlayer, playerRotate];
};
