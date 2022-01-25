import {
  START_GAME,
  UPDATE_MEMBER,
  UPDATE_NAME,
  CHANGE_PIECE,
  startgame,
  updatemember,
  updatename,
  nextpiece,
} from "../actions/roomAction";
import {
  ADD_PLAYER_NAME,
  UPDATE_PLAYER,
  addPlayerName,
  updateplayer,
  playerLost,
} from "../actions/playerAction";
import {
  ADD_PLAYER,
  UPDATE_SCORE,
  addplayer,
  updatescore,
} from "../actions/playersAction";

describe("actions Rooms", () => {
    it("Add New Member", () => {
        const info = {
          user: "test",
          score: 0,
        };
        const likelyAction = {
          type: UPDATE_MEMBER,
          data: info,
        };
        expect(updatemember(info)).toEqual(likelyAction);
      });
    
  it("change startgame", () => {
    const info = true;
    const likelyAction = {
      type: START_GAME,
      data: info,
    };
    expect(startgame(info)).toEqual(likelyAction);
  });


  it("change Pieces", () => {
    const info = [];
    const likelyAction = {
      type: CHANGE_PIECE,
      data: info,
    };
    expect(nextpiece(info)).toEqual(likelyAction);
  });

  it("change Room name", () => {
    const info = "test";
    const likelyAction = {
      type: UPDATE_NAME,
      data: info,
    };
    expect(updatename(info)).toEqual(likelyAction);
  });
});

describe("Actions Player", () => {
  it("Add Player Name", () => {
    const info = {
      user: "test",
      score: 0,
    };
    const likelyAction = {
      type: ADD_PLAYER_NAME,
      data: info,
    };
    expect(addPlayerName(info)).toEqual(likelyAction);
  });

  

  it("Update Player Name", () => {
    const info = {
      user: "test",
      score: 0,
    };
    const likelyAction = {
      type: UPDATE_PLAYER,
      data: info,
    };
    expect(updateplayer(info)).toEqual(likelyAction);
  });



});
  it("Lost player", () => {
    const info = {
      user: "test",
      score: 0,
      lost: true,
    };
    const likelyAction = {
      type: UPDATE_PLAYER,
      lost: true,
      data: info,
    };

    expect(playerLost(info)).not.toEqual(likelyAction);
  });


describe("Actions Players", () => {
  it("Add Player Players", () => {
    const info = {
      user: "test",
      score: 0,
      stage: [],
    };
    const likelyAction = {
      type: ADD_PLAYER,
      data: info,
    };
    expect(addplayer(info)).toEqual(likelyAction);
  });



  it("Add Player Players", () => {
    const info = {
      user: "test",
      score: 0,
      stage: [],
    };
    const likelyAction = {
      type: UPDATE_SCORE,
      data: info,
    };
    expect(updatescore(info)).toEqual(likelyAction);
  });
});





  
