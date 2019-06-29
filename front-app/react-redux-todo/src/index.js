import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './Store';
import {Provider} from 'react-redux';

// connected-react-routerの使用に必要なimport
import { createBrowserHistory } from "history"
import { ConnectedRouter } from 'connected-react-router'
import {Switch, Router} from "react-router-dom";

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <App/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
