import React from 'react';
import Button from 'react-bootstrap/Button'
import Validation from '../validator';

export default  class Users extends React.Component {
    constructor(props) {
        super(props);
    };

    check() {
        console.log("check start.")
        const validator = new Validation();
        const ret = validator.dateFromTo().check({from: 3, to: 2});
        console.log(`Ret: ${ret}`);
    }

    render() {
        return (
            <div>
               <Button onClick={this.check.bind(this)}>Check</Button>
            </div>
        )
    }
}