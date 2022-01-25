import rPlayer from "../reducers/playerReducer";
import * as aPlayer from "../actions/playerAction";
import rPlayers from "../reducers/playersReducer";
import * as aPlayers from "../actions/playersAction";
import rRoom from "../reducers/roomReducer";
import * as aRoom from "../actions/roomAction";

describe("Room test", () => {
    it("init state", () => {
        expect(rRoom(undefined, {})).toEqual({
            name: "",
            members: 0,
            gameStarted: false,
            gameOver: false,
            mode: "Solo",
            next_piece: [],
        });
    });

    it("Room start game ", () => {
        expect(rRoom(undefined, { type: aRoom.START_GAME })).toEqual({
            name: "",
            members: 0,
            gameStarted: true,
            gameOver: false,
            mode: "Solo",
            next_piece: [],
        });
    });
    // it("Room restart game ", () => {
    //     expect(rRoom(undefined, { type: aRoom.RESTART_GAME })).toEqual({
    //         name: "",
    //         members: 0,
    //         gameStarted: false,
    //         mode: "Solo",
    //         next_piece: [],
    //         gameOver: false,
    //     });
    // });
    it("Room reset state ", () => {
        expect(rRoom(undefined, { type: "RESET_STATE" })).toEqual({
            name: "",
            members: 0,
            gameStarted: false,
            mode: "Solo",
            next_piece: [],
            gameOver: false,
        });
    });
    // it("Room reset state ", () => {
    //     expect(rRoom(undefined, { type: "RESET_STATE" })).not.toEqual({
    //         name: "",
    //         members: 0,
    //         gameStarted: false,
    //         mode: "Multiplayer",
    //         next_piece: [],
    //         gameOver: false,
    //     });
    // });
    it("Room end game", () => {
        expect(rRoom(undefined, { type: aRoom.GAME_OVER })).toEqual({
            name: "",
            members: 0,
            gameStarted: false,
            gameOver: true,
            mode: "Solo",
            next_piece: [],
        });
    });

    it("Room name join", () => {
        expect(rRoom(undefined, {
            type: aRoom.ROOM_JOINED,
            data: { room: "Room1" },
        })).toEqual({
            name: "Room1",
            members: 0,
            gameStarted: false,
            gameOver: false,
            mode: "Solo",
            next_piece: [],
        });
    });

    it("Room mode update", () => {
        expect(rRoom(undefined, {
            type: aRoom.UPDATE_MODE,
            data: "Multiplayer",
        })).toEqual({
            name: "",
            members: 0,
            gameStarted: false,
            gameOver: false,
            mode: "Multiplayer",
            next_piece: [],
        });
    });


    it("Room change piece", () => {
        expect(rRoom(undefined, {
            type: aRoom.CHANGE_PIECE,
            data: ["I", "J"]
        })).toEqual({
            name: "",
            members: 0,
            gameStarted: false,
            gameOver: false,
            mode: "Solo",
            next_piece: ["I", "J"],
        });
    });

    it("Room clear piece", () => {
        expect(rRoom(undefined, { type: aRoom.CLEAR_PIECES })).toEqual({
            name: "",
            members: 0,
            gameStarted: false,
            gameOver: false,
            mode: "Solo",
            next_piece: [],
        });
    });

    it("update new member", () => {
        expect(rRoom(undefined, {
            type: aRoom.UPDATE_MEMBER,
            data: 4,
        })).toEqual({
            name: "",
            members: 4,
            gameStarted: false,
            gameOver: false,
            mode: "Solo",
            next_piece: [],
        });
    });

    it("update new name", () => {
        expect(rRoom(undefined, {
            type: aRoom.UPDATE_NAME,
            data: "NEW_NAME",
        })).toEqual({
            name: "NEW_NAME",
            members: 0,
            gameStarted: false,
            gameOver: false,
            mode: "Solo",
            next_piece: [],
        });
    });
});

describe("Player test", () => {
    it("init state", () => {
        expect(rPlayer(undefined, {})).toEqual({
            username: "",
            connected: false,
            lost: false,
            admin: false,
            row: 0,
        });
    });

    it("UPDATE_PLAYER ", () => {
        expect(rPlayer(undefined, {
            type: aPlayer.UPDATE_PLAYER,
            data: {
                user: "UPDATE_PLAYER user",
                is_admin: true
            },
        })).toEqual({
            username: "UPDATE_PLAYER user",
            connected: true,
            admin: true,
            lost: false,
            row: 0
        });
    });

    it("ADD_PLAYER_NAME test", () => {
        expect(rPlayer(undefined, {
            type: aPlayer.ADD_PLAYER_NAME,
            data: "ADD_PLAYER_NAME",
        })).toEqual({
            username: "ADD_PLAYER_NAME",
            connected: false,
            lost: false,
            admin: false,
            row: 0,
        });
    });

    it("START_GAME test", () => {
        expect(rPlayer(undefined, {
            type: aRoom.START_GAME,

        })).toEqual({
            username: "",
            admin: false,
            connected: false,
            lost: false,
            row: 0,
        });
    });


    it("ADMIN_PLAYER test", () => {
        expect(rPlayer(undefined, {
            type: aPlayer.ADMIN_PLAYER
        })).toEqual({
            username: "",
            connected: false,
            admin: true,
            lost: false,
            row: 0,
        });
    });

    it("PLAYER_LOST test", () => {
        expect(rPlayer(undefined, {
            type: aPlayer.PLAYER_LOST
        })).toEqual({
            username: "",
            connected: false,
            admin: false,
            lost: true,
            row: 0,
        });
    });


    it("SET_ROW test", () => {
        expect(rPlayer(undefined, {
            type: aPlayer.SET_ROW,
            data: 1
        })).toEqual({
            username: "",
            connected: false,
            admin: false,
            lost: false,
            row: 1,
        });
    });

});

describe("Players test", () => {
    it("DEFAULT_STATE test", () => {
        expect(rPlayers([], {
            type: "RESET_STATE",
        })).toEqual([]);
    });

    it("UPDATE_SCORE test", () => {
        expect(rPlayers([], {
            type: aPlayers.UPDATE_SCORE,
            data: 1200,
        })).toEqual({
            score: 1200,
        });
    });

    it("ADD_PLAYERs test", () => {
        expect(rPlayers([], {
            type: aPlayers.ADD_PLAYER,
            data: [{
                name: "ADD_PLAYER",
                score: 1200,
            }],
        })).toEqual([{
            name: "ADD_PLAYER",
            score: 1200,
        }]);
    });


});