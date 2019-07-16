import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";

import Alarm from './Alarm';
import CarDetail from './CarDetail';
import CarSearch from './CarSearch';
import Dashboard from './Dashboard';
import UserAccount from './UserAccount';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to='/' exact={true}>TS-System</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/' exact={true}　eventKey="link-2">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to='/search' eventKey="link-2">CarSearch</Nav.Link>
                </Nav>
                <NavDropdown title="Settings" id="basic-nav-dropdown" className='mr-4'>
                    <NavDropdown.Item as={Link} to='/alarm'>Alarm</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/users'>UserManagement</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        )
    }
}

export default Header;
