import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import fastClick from "react-fastclick";

import rootReducer from './reducer';
import Router from './router';

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
        <Router />
    </Provider>,
    document.getElementById('root')
);