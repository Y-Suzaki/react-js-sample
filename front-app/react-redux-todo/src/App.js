import React from 'react';
import './App.css';
import Main from './components/Main';
import Setting from './components/Setting';
import NoMatch from './components/NoMatch';
import { Button } from 'react-bootstrap';

// connected-react-routerの使用に必要なimport
import {Switch} from "react-router-dom";
import { Route, Link, NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { push } from "connected-react-router"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink activeStyle={{color: 'red'}} exact={true} to='/'>Top</NavLink></li>
                    <li><NavLink activeStyle={{color: 'red'}} to='/setting'>Setting</NavLink></li>
                    <li><Button onClick={this.props.pushSettingClicked}>To setting</Button></li>
                </ul>
                <Switch>
                    <Route path='/' component={Main} exact={true}/>
                    <Route path='/setting' component={Setting}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        pushSettingClicked: () => dispatch(push('/setting'))
    }
};

export default connect(null, mapDispatchToProps)(App);
