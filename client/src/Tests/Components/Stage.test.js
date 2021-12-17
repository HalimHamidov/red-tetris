import renderer from "react-test-renderer";
import Stage from "../../Components/Stage";
import { Createstage } from "../../gameHelper";

let stage = Createstage(12, 20)

test("Test Stage Gameover rendering ", () => {
    const disr = renderer.create( < Stage gameOver = { true } stage = { stage }/>).toJSON();
    expect(disr).toMatchSnapshot();
});

test("Test Stage rendering ", () => {
    const disr = renderer.create( < Stage /> ).toJSON();
    expect(disr).toMatchSnapshot();
});