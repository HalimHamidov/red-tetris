import React from "react";
import App from "../App";
import { render } from "@testing-library/react";
import store from "../Store";
import { Provider } from "react-redux";

test("Test", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});