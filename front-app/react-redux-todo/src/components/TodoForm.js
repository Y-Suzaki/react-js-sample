import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/TodoAction';
// react-bootstrapに必要なimport
import { Button } from 'react-bootstrap';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        // Component内で完結する状態は、storeに出さなくて良い
        this.state = {
            newTodo: ''
        }
    }

    handleChange(e) {
        this.setState({newTodo: e.target.value});
    }

    clickAddTodo() {
        if(this.state.newTodo === '') {
            return;
        }
        // propsを通して渡される
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ''});
    }

    render() {
        return (
            <div>
                <h3>My Todo</h3>
                <input value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>{this.state.newTodo}<br/>
                <Button onClick={this.clickAddTodo.bind(this)} variant="outline-primary" size="1g">Add Todo</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
};

// 第２引数はstateとpropsのマッピングになるが、本Componentでは不要のためnullを渡す
export default connect(null, mapDispatchToProps)(TodoForm);