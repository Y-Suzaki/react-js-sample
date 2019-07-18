import React from 'react';
import Alarm from './components/Alarm';
import CarDetail from './components/CarDetail';
import CarSearch from './components/CarSearch';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import UserAccount from './components/UserAccount';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Switch} from "react-router-dom";
import { Route, Link, NavLink } from "react-router-dom"

class App extends React.Component {
    render() {
        return (
            <Container fluid style={{backgroundColor: "#e9ecef"}}>
                <Row className='bg-dark fixed-top'>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col>
                        <Switch>
                            <Route path='/' component={Dashboard} exact={true}/>
                            <Route path='/alarm' component={Alarm} exact={true}/>
                            <Route path='/car' component={CarDetail} exact={true}/>
                            <Route path='/search' component={CarSearch} exact={true}/>
                            <Route path='/users' component={UserAccount} exact={true}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;
