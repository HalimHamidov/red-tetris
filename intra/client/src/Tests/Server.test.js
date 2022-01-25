import { socket } from "../hooks";
import helpers from "../../../server/src/helpers";
describe("Server Test ", () => {
    test("Start Game", () => {
        socket.emit("start game");
        socket.on("start game", (res) => expect(res.length).toBe(10));
    });
    test("should Joinroom", () => {
        socket.emit("joinRoom", { user: "test", room: "ROOM", mode: "Solo" });
        socket.on("React-Toastify", (res) => {
            expect(res.message).toContain("Created room!");
        });
        socket.emit("joinRoom", { user: "testing", room: "ROOM" });
        socket.on("React-Toastify", (res) => {
            expect(res.message).toContain("Username Already exists");
        });
        socket.disconnect()
    });

    test("New tetriminos", () => {
        socket.emit("new_tetriminos");
        socket.on("new_tetriminos", (res) => expect(res.length).toBe(10));
    });
    test("Stage", () => {
        let tmp = {
            stage: [],
            user: "TEST7855421",
            room: "RED___ROOM",
            players: [],
        };
        socket.emit("Stage", {
            stage: [],
            user: "TEST7855421",
            room: "RED___ROOM",
            players: [],
        });
        socket.on("Stage", (res) => expect(res).toBe(tmp));
        socket.disconnect()
    });
    test("Validate user & room", () => {
        expect(helpers.validateName("")).toBeFalsy();
        expect(helpers.validateName("./*")).toBeFalsy();
        expect(helpers.validateName("TEST")).toBeTruthy();
    });
});