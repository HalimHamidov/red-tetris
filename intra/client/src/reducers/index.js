import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import roomReducer from "./roomReducer";
import players from "./playersReducer";

const combinedReducer = combineReducers({
  player: playerReducer,
  players: players,
  room: roomReducer,
});
export default combinedReducer;
