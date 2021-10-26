import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "./utils/store";
import configureHistory from "./utils/history";
import App from "./app";

const store = configureStore();
const history = configureHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
