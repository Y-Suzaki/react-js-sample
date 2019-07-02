import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/TodoAction';
// react-bootstrapに必要なimport
import { Button } from 'react-bootstrap';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    clickDeleteTodo(index) {
        this.props.deleteTodo(index);
    }

    render() {
        return (
            <li key={this.props.todo.id}>
                {this.props.todo}
                <Button onClick={this.clickDeleteTodo.bind(this, this.props.index)}>DELETE</Button>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo : (index) => {
            dispatch(deleteTodo(index))
        }
    }
};

// 第２引数はstateとpropsのマッピングになるが、本Componentでは不要のためnullを渡す
export default connect(null, mapDispatchToProps)(TodoItem);