import renderer from "react-test-renderer";
import Display from "../Components/Display";

test("Test Display rendering", () => {
    const disr = renderer.create( < Display / > ).toJSON();
    expect(disr).toMatchSnapshot();
});

test("Test Display title rendering", () => {
            const disr = renderer.create( < Display title = "tetris"
                gameover = { true }
                />).toJSON();
                expect(disr).toMatchSnapshot();
            });