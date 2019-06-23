import React from 'react';
import './App.css';
// react-reduxに必要なimport
import {increment, decrement} from './actions/counterAction'
import {connect} from 'react-redux';
// react-bootstrapに必要なimport
import { Button } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* props経由でstateやdispatchにアクセス可能 */}
                Clicked: {this.props.count} times.<br/>
                <Button variant="outline-primary" size="1g" onClick={this.props.increment}>+</Button>
                <Button variant="outline-primary" size="1g" onClick={this.props.decrement}>-</Button>
            </div>
        );
    }
}

// React-Reduxを使うための設定
const mapStateToProps = state => {
    return {
        count: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

