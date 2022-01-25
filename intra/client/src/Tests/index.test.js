import App from "../App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../Store";

jest.mock("react-dom", () => ({ render: jest.fn() }));
test("test", () => {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);

  require("../index");

  expect(ReactDOM.render).toHaveBeenCalledWith(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
});
