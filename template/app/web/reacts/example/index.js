import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducer';
import Router from './router';

import '@common/css/global.scss';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware // 允许我们 dispatch() 函数
    )
);
render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);