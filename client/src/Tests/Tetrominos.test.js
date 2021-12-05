import { Tetrominos } from "../tetrominos";

test("Test Tetrominos", () => {
    expect(Tetrominos[0]).toEqual({
        color: "0, 0, 0",
        shape: [
            [0]
        ],
    });

    // expect(Tetrominos['T']).toEqual({
    //     shape: [
    //         ["T", "T", "T"],
    //         [0, "T", 0],
    //         [0, 0, 0],
    //     ],
    //     color: "128, 0, 128",
    // });

});