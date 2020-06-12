import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import * as Sentry from "@sentry/browser";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(Thunk))
);
Sentry.init({
  dsn:
    "https://6bffa2dd5dde4ebeb0afe5bec5852cb8@o403974.ingest.sentry.io/5274576",
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
