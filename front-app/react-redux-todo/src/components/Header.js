import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {Button} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" defaultActiveKey="link-1">
                    <Navbar.Brand as={Link} to='/' exact={true}>React-Bootstrap</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/setting' eventKey="link-2">Setting</Nav.Link>
                        <Nav.Link as={Link} to='/setting' eventKey="link-3">Setting</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                {/*<Button onClick={this.props.pushSettingClicked}>To setting</Button>*/}
            </div>
        )
    }
}

export default Header;
