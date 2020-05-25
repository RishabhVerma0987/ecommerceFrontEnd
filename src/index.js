import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(Thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
