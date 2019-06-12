import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Router機能を使用する場合は以下の定義が必要
ReactDOM.render(
    // URLをHashモードにしたい場合、HashRouterを使うこと
 //   <HashRouter>
 //       <App/>
 //   </HashRouter>,
    <BrowserRouter>
        <App />
    </BrowserRouter>    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
