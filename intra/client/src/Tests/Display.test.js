import renderer from "react-test-renderer";
import Display from "../Components/Display";

test("Test Display rendering", () => {
    const displayrender = renderer.create( < Display / > ).toJSON();
    expect(displayrender).toMatchSnapshot();
});

test("Test Display title rendering", () => {
            const displayrender = renderer.create( <
                Display title = "tetris"
                gameover = { true }
                />).toJSON();
                expect(displayrender).toMatchSnapshot();
            });

        test("Test data rendering", () => {
            const displayrender = renderer.create( <
                Display title = "tetris"
                data = "0" / > ).toJSON();
            expect(displayrender).toMatchSnapshot();
        });