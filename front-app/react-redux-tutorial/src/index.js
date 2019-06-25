import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// reduxに必要なComponent
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// storeの生成
// React DevToolsの適用
const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 一番外側で<Provider>を生成する
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
