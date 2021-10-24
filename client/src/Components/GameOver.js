import React from "react";
import url from "../img/Gameover.jpeg";
import url1 from "../img/Tetris-Founder.png";
import { StyledOverlay, StyledOverlayText } from "./styling/StyledStage";

export default function GameOver({ player }) {
  return (
    <StyledOverlay>
      <StyledOverlayText>
        {player?.lost === true ? (
          <img data-testid="gameOver-Lost-img" style={{ width: "288px" }} src={url} />
        ) : (
          <img data-testid="gameOver-Won-img" style={{ width: "288px" }} src={url1} />
        )}
        <h1>{player?.lost === true ? "You lost! Try HARD!" : "You Win! Congratulations! "}</h1>
        <p>
          {player?.admin === true
            ? "Restart the game"
            : "Wait for host to restart the game"}
        </p>
      </StyledOverlayText>
    </StyledOverlay>
  );
}
