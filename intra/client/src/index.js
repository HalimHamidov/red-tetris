import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { actionListener } from "./listeners";
import store from "./Store";
import { checkHash } from "./actions/checkHash";
import { Provider } from "react-redux";

actionListener(store.dispatch, store.getState);
checkHash(window.location.hash.substring(1));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
