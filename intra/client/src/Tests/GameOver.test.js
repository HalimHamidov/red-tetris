import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import GameOver from "../Components/GameOver";
import React from "react";

test("App render test ", () => {
  const tree = renderer.create(<GameOver />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("Player Lost Test ", () => {
  const { findByText, getByTestId } = render(
    <GameOver player={{ lost: true, admin: true }} />
  );
  expect(getByTestId("gameOver-Lost-img")).toBeTruthy();
  const msg = "You Lost";
  expect(findByText(msg)).toBeDefined();
});
test("Player Won ", () => {
  const { findByText, getByTestId } = render(
    <GameOver player={{ lost: false, admin: true }} />
  );
  expect(getByTestId("gameOver-Won-img")).toBeTruthy();
  const msg = "You Won";
  expect(findByText(msg)).toBeDefined();
});
