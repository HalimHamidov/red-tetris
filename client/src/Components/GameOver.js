import React from "react";
import url from "../img/Gameover.jpeg";
import url1 from "../img/WOZ.png";
import { StyledOverlay, StyledOverlayText } from "./styling/StyledStage";

export default function GameOver({ player }) {
  return (
    <StyledOverlay>
      <StyledOverlayText>
        {player?.lost === true ? (
          <img data-testid="gameOver-Lost-img" style={{ width: "200px" }} src={url} />
        ) : (
          <img data-testid="gameOver-Won-img" style={{ width: "200px" }} src={url1} />
        )}
        <h1>{player?.lost === true ? "You lost" : "You Won"}</h1>
        <p>
          {player?.admin === true
            ? "Click on ⟳ to restart the game"
            : "Wait for host player to restart the game"}
        </p>
      </StyledOverlayText>
    </StyledOverlay>
  );
}
