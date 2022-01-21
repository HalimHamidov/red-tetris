import renderer from "react-test-renderer";
import Cell from "../Components/Cell";

test("App render test ", () => {
    const tree = renderer.create( < Cell / > ).toJSON();
    expect(tree).toMatchSnapshot();
});