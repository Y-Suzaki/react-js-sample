import React from "react";
import Title from "./Header/Title"

// Need to add export default because of reference from other file.
export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {title: "Welcome to you."}
    }
    render() {
        setTimeout(
            () => { this.setState({title: "Welcome to you. Happy!"}); }, 2000
        );
        return (
            <div>
                <Title title={this.state.title}/>
            </div>
        )
    }
}