import { useState, useEffect, useCallback } from "react";
import url from "../img/pop.mp3";
import { socket } from "../hooks";
export const useGameStatus = (linesCompleted, room, user) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
  const [audio2] = useState(new Audio(url));
  //Original BPS scoring system https://tetris.wiki/Scoring
  const lineClearScores = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
     // We have score
    if (linesCompleted > 0) {
      // This is how original Tetris score is calculated
      setScore((prev) => prev + lineClearScores[linesCompleted - 1] * (level + 1));
      setRows((prev) => prev + linesCompleted);
      audio2.play();
      socket.emit("new score", {
        user: user,
        score: score + lineClearScores[linesCompleted - 1] * (level-1),
        room: room,
      });
    }
  }, [level, lineClearScores, linesCompleted]);
  useEffect(() => {
    calcScore();
  }, [calcScore, linesCompleted, score]);
  return [score, setScore, rows, setRows, level, setLevel];
};


