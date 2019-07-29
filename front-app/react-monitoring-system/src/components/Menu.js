import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: [
                "menu-link-custom-inactive", "menu-link-custom-inactive", "menu-link-custom-inactive", "menu-link-custom-inactive", "menu-link-custom-inactive"
            ]
        }
    }

    clickLink(index) {
        console.log(index);
        const menuState = this.state.menuState.map((x, i) => {
            return index === i ? "menu-link-custom-active" : "menu-link-custom-inactive"
        });
        console.log(menuState);
        this.setState({menuState});
    }

    render() {
        return (
            <div className='pt-3 bg-white vh-100'>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link as={Link} to='/search' className={this.state.menuState[0]} onClick={this.clickLink.bind(this, 0)}>車両検索</Nav.Link>
                    <Nav.Link as={Link} to='/alarm' className={this.state.menuState[1]} onClick={this.clickLink.bind(this, 1)}>アラーム設定</Nav.Link>
                    <Nav.Link as={Link} to='/users' className={this.state.menuState[2]} onClick={this.clickLink.bind(this, 2)}>ユーザー管理</Nav.Link>
                    <Nav.Link as={Link} to='/car-type' className={this.state.menuState[3]} onClick={this.clickLink.bind(this, 3)}>車種管理</Nav.Link>
                    <Nav.Link as={Link} to='/cars' className={this.state.menuState[4]} onClick={this.clickLink.bind(this, 4)}>事業所管理</Nav.Link>

                </Nav>
            </div>
        )
    }
}

export default Menu;