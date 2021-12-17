import { socket } from "../hooks";
import helpers from "../../../server/src/helpers";

describe("Server Test ", () => {
    test("Start Game", () => {
        socket.emit("Start the tetris");
        socket.on("Start the tetris", (result) => expect(result.length).toBe(16));
    });

    test("Test new tetrominos", () => {
        socket.emit("new tetrominos");
        socket.on("new tetrominos", (res) => expect(result.length).toBe(14));
    });

    test("Test Stage", () => {
        let temp = {
            stage: [],
            user: "TEST8",
            room: "RED_TETRIS_ROOM",
            players: [],
        };
        socket.emit("Stage", {
            stage: [],
            user: "TEST8",
            room: "RED_TETRIS_ROOM",
            players: [],
        });
        socket.on("Stage", (result) => expect(result).toBe(temp));
    });
    test("Test user and room validation", () => {
        expect(helpers.validateName("TETRIS")).toBeTruthy();
        expect(helpers.validateName("")).toBeFalsy();
    });
});