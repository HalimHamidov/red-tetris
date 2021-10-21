import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Store";
import {Provider} from 'react-redux';
import {stethoscope} from "./listeners";
import {checkHash} from './actions/checkHash';

stethoscope(store.dispatch, store.getState);
checkHash(window.location.hash.substring(1));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
