import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import fastClick from "react-fastclick";

import rootReducer from './reducer';
import ModalSwitch from './router';

import '@common/css/global.scss';

fastClick();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
render(
    <Provider store={store}>
        <Router basename={MI.reactRoute}>
            <Route component={ModalSwitch} />
        </Router>
    </Provider>,
    document.getElementById('root')
);