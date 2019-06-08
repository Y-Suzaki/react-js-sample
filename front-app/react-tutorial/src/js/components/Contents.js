import React from "react";
import CustomButton from "./parts/Button"
import CustomButtonCs from "./parts/ButtonCs"

export default class Footer extends React.Component{
    constructor() {
        super();
        this.state = {word: ""};
    }
    handleChange(e) {
        const word = e.target.value;
        this.state.word = word;
    }
    render() {
        return (
            <div>
                <p>
                    Search Word: <input onChange={this.handleChange.bind(this)} />
                    <CustomButton title="Search"/>
                    <CustomButton title="Delete"/>
                </p>
                <p>
                    <span>{this.state.word}</span>
                </p>
            </div>
        )
    }
}