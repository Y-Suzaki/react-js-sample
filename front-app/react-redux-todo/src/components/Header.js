import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {Button} from "react-bootstrap";


class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink activeStyle={{color: 'red'}} exact={true} to='/'>Top</NavLink></li>
                    <li><NavLink activeStyle={{color: 'red'}} to='/setting'>Setting</NavLink></li>
                    <li><Button onClick={this.props.pushSettingClicked}>To setting</Button></li>
                </ul>
            </div>
        )
    }
}

export default Header;
