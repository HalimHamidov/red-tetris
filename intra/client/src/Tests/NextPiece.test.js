import renderer from "react-test-renderer";
import NextPiece from "../Components/NextPiece";
import { Createstage } from "../gameHelper";
let stage = Createstage(8, 8)
test("NextPiece render test ", () => {
    const nextpiecerenderer = renderer.create( < NextPiece / > ).toJSON();
    expect(nextpiecerenderer).toMatchSnapshot();
});
test("NextPiece render I ", () => {
    const nextpiecerenderer = renderer.create( < NextPiece stage = { stage }
        nextPiece = "I" / > ).toJSON();
    expect(nextpiecerenderer).toMatchSnapshot();
});
test("NextPiece render L ", () => {
    const nextpiecerenderer = renderer.create( < NextPiece stage = { stage }
        nextPiece = "L" / > ).toJSON();
    expect(nextpiecerenderer).toMatchSnapshot();
});
test("NextPiece render J ", () => {
    const nextpiecerenderer = renderer.create( < NextPiece stage = { stage }
        nextPiece = "J" / > ).toJSON();
    expect(nextpiecerenderer).toMatchSnapshot();
});