import { socket } from "../hooks";

describe("Server Test ", () => {
    test("Start Game", () => {
        socket.emit("start game");
        socket.on("start game", (res) => expect(res.length).toBe(10));
    });
});