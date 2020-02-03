/// <reference types="mitan-ts" />
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
// @ts-ignore
import fastClick from "react-fastclick";
// @ts-ignore
import rootReducer from "./reducer";
// @ts-ignore
import ModalSwitch from "./router";

import "@common/css/global.scss";

fastClick();

const store: any = createStore(rootReducer, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <Router basename={MI.config.reactRoute}>
      <Route component={ModalSwitch} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
