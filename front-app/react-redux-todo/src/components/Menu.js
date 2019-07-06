import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {Button} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


class Menu extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" defaultActiveKey="link-1">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Menu;
