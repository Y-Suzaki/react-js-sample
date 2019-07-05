import React from 'react';
import './App.css';
import Main from './components/Main';
import Setting from './components/Setting';
import SettingDetail from './components/SettingDetail';
import Header from './components/Header';
import Menu from './components/Menu';
import NoMatch from './components/NoMatch';
import { Button } from 'react-bootstrap';

// connected-react-routerの使用に必要なimport
import {Switch} from "react-router-dom";
import { Route, Link, NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { push } from "connected-react-router"

// React Gridで必要なimport
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row noGutters={true}>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Menu/>
                    </Col>
                    <Col xs={10}>
                        <Switch>
                            <Route path='/' component={Main} exact={true}/>
                            <Route path='/setting' component={Setting} exact={true}/>
                            <Route path='/setting/:id' component={SettingDetail}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        pushSettingClicked: () => dispatch(push('/setting'))
    }
};

export default connect(null, mapDispatchToProps)(App);
