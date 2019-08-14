import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from "aws-amplify";
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {authConfig} from './auth';
import * as serviceWorker from './serviceWorker';

// Amplifyの初期化
Amplify.configure({
    Auth: authConfig
});

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>    ,
    document.getElementById('root'));

serviceWorker.unregister();
