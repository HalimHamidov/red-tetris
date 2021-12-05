export const START_GAME = "START_GAME";
export const RESTART_GAME = "RESTART_GAME";
export const GAME_OVER = "GAME_OVER";

export const ROOM_JOINED = "ROOM_JOINED";
export const UPDATE_MODE = "UPDATE_MODE";

export const CHANGE_PIECE = "CHANGE_PIECE";
export const CLEAR_PIECES = "CLEAR_PIECES";

export const UPDATE_MEMBER = "UPDATE_MEMBER";
export const UPDATE_NAME = "UPDATE_NAME";

const startgame = (data) => ({
  type: START_GAME,
  data: data,
});

const updatemember = (data) => ({
  type: UPDATE_MEMBER,
  data: data,
});

const nextpiece = (data) => ({
  type: CHANGE_PIECE,
  data: data,
});

const updatename = (data) => ({
  type: UPDATE_NAME,
  data: data,
});
export { startgame, updatemember, nextpiece, updatename };
