import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTruckMonster);

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" style={{height: 45}}>
                {/*<Navbar.Brand as={Link} to='/' exact={true}>TS-System</Navbar.Brand>*/}
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/' exact={true}　eventKey="link-2" className='px-5 nav-link-custom'>
                        <FontAwesomeIcon icon="truck-monster"/>
                        <span className='ml-2'>Dashboard</span>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/search' eventKey="link-2" className='px-5 nav-link-custom'>CarSearch</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Settings" id="basic-nav-dropdown" className='mr-4'>
                        <NavDropdown.Item as={Link} to='/alarm'>Alarm</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/users'>UserManagement</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;
