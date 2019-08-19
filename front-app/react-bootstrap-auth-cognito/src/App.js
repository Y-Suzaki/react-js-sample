import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { withAuthenticator } from "aws-amplify-react";
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import Users from './components/users'
// import CallBack from './components/callback'
import { Bootstrap } from 'a-theme-react';
import Logs from './components/logs'
import { getIdToken, signOut, MySignUp } from './auth'
import './App.css';
import {
    ConfirmSignIn,
    ConfirmSignUp,
    ForgotPassword,
    SignIn,
    SignUp,
    VerifyContact
} from "aws-amplify-react";

// 認証必須のルーティング設定
// const WithAuth = withAuthenticator(
//     ({ match }) => (
//         <Switch>
//             <Route path="/users" exact={true} component={Users}/>
//             <Route path="/logs" exact={true} component={Logs}/>
//         </Switch>
//     ),
//     false,
//     [
//         <SignIn />,
//         <ConfirmSignIn />,
//         <VerifyContact />,
//         <MySignUp override={'SignUp'}/>,
//         <ConfirmSignUp />,
//         <ForgotPassword />,
//     ],
//     null,
//     Bootstrap
// );

const WithAuth = withAuthenticator(
    ({ match }) => (
        <Switch>
            <Route path="/users" exact={true} component={Users}/>
            <Route path="/logs" exact={true} component={Logs}/>
        </Switch>
    ),
    {
        signUpConfig: {
            hiddenDefaults: ["phone_number", "email"]
        }
    }
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
