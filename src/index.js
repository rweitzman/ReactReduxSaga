import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "./utils/store";
import configureHistory from "./utils/history";
import App from "./app";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={configureHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
