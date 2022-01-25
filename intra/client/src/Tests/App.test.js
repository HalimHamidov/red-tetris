import React from "react";
import App from "../App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore([thunk]);
import { render, fireEvent, screen } from "@testing-library/react";

describe("App", () => {
  test("should render AddName component if username is not yet set", () => {
    const store = mockStore({
      player: { username: "" },
      room: { name: "" },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = screen.getByText("Red Tetris");
    fireEvent.click(button);
    expect(screen.getByPlaceholderText(/Enter Username/));
  });
  test("should render Rooms component if username is set", () => {
    const store = mockStore({
      player: { username: "testUser" },
      room: { name: "" },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = screen.getByText("Red Tetris");
    fireEvent.click(button);
    expect(screen.getByPlaceholderText(/Type your Room Name/));
  });
  test("should render Tetris component if username and room are set", () => {
    const store = mockStore({
      player: {
        username: "testUser",
        connected: true,
        lost: false,
        admin: true,
        row: 0,
      },
      players: [
        {
          user: "testUser",
          score: 0,
          stage: [],
        },
      ],
      room: {
        name: "testRoom",
        members: 1,
        gameStarted: false,
        mode: "Solo",
        next_piece: [],
        gameOver: false,
      },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = screen.getByText("Red Tetris");
    fireEvent.click(button);
    expect(screen.getByTestId("styled-tet-wra"));
  });
});
