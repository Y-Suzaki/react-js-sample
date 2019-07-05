import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {Button} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto" defaultActiveKey="link-1">
                        <Nav.Link as={Link} to='/' exact={true} eventKey="link-1">Top</Nav.Link>
                        <Nav.Link as={Link} to='/setting' eventKey="link-2">Setting</Nav.Link>
                    </Nav>
                </Navbar>
                {/*<Button onClick={this.props.pushSettingClicked}>To setting</Button>*/}
            </div>
        )
    }
}

export default Header;
