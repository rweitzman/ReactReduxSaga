import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./utils/store";
import configureHistory from "./utils/history";
import "./styles/index.css";
import App from "./app";

const store = configureStore();
const history = configureHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
