import store from "../Store";
test("Index test", () => {
    expect(store.getState()).toHaveProperty("player", "players", "room");
})