import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { withAuthenticator } from "aws-amplify-react";
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import Users from './components/users'
// import CallBack from './components/callback'
import Logs from './components/logs'
import { getIdToken, signOut } from './auth'
import './App.css';

// 認証必須のルーティング設定
const WithAuth = withAuthenticator(
    ({ match }) => (
        <Switch>
            <Route path="/users" exact={true} component={Users}/>
            <Route path="/logs" exact={true} component={Logs}/>
        </Switch>
    )
);

class App extends React.Component {
    handleSignOut = async () => {
        await signOut();
    };

    handleConsole = async () => {
        const jwt = await getIdToken();
        console.log(jwt);
    };

    render() {
        return (
            <div className="App">
                App Home<br/>
                <Button onClick={this.handleSignOut.bind(this, "")}>Logout</Button><br/>
                <Button onClick={this.handleConsole.bind(this)}>Console</Button>
              <Switch>
                  {/* 認証が不要なページは上部に追加すること */}
                  {/*<Route path="/callback" exact={true} component={CallBack}/>*/}
                  <Route path="/" component={WithAuth}/>
              </Switch>
            </div>
        );
    }
}

export default App;
