import React from "react";

export default class Title extends React.Component{
    constructor() {
        super();
        this.message = "Welcome! React.js [Header]"
    }

    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}