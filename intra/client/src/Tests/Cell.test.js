import renderer from "react-test-renderer";
import Cell from "../Components/Cell";

test("App react-test-renderer test ", () => {
    const cellMatch = renderer.create( < Cell / > ).toJSON();
    expect(cellMatch).toMatchSnapshot();
});