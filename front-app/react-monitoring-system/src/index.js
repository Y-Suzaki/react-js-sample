import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import { createBrowserHistory } from "history"
import { ConnectedRouter } from 'connected-react-router'
import {Switch, Router} from "react-router-dom";
import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = reduxCreateStore(
    combineReducers(
        {
            // Router用の状態もStoreで管理
            router: connectRouter(history)
        }
    ),
    composeEnhancers(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        ))
    );

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
