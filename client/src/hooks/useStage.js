import { useState, useEffect } from "react";
import { Createstage } from "../gameHelper";
import { socket } from "./socket";
// import { Tetrominos } from "../tetrominos";

export const useStage = (
  player, NextPlayer, resetPlayer, gameOver, user, room,
  players, nextPiece) => {
  const [stage, setStage] = useState(Createstage());
  const [stageNext, setStageNext] = useState(Createstage(4, 4));
  const [linesCompleted, setRowsCleared] = useState(0);
  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = (newStage) =>
      newStage.reduce((ack, row) => {
        if (row.findIndex((cell) => cell[0] === 0 || cell[0] === "P") === -1) {
          setRowsCleared((prev) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateStage = (prevStage) => {
      //First Flush the stage - playing field
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      //Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      // Then check if we got some score if collided
      if (player.collided && !gameOver) {
        resetPlayer(newStage);
        setStageNext(Createstage(4, 4));
        socket.emit("Stage", {
          stage: stage,
          player: user,
          room: room,
          players: players,
        });
        return sweepRows(newStage);
      }

      return newStage;
    };
    if (nextPiece.length > 0 && NextPlayer.tetromino) {
      NextPlayer.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            stageNext[y][x] = [
              value,
              `${NextPlayer.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
    } else setStageNext(Createstage(4, 4))
  // Here are the updates
    setStage((prev) => updateStage(prev));
  }, [player]);

  return [stage, stageNext, setStage, linesCompleted];
};