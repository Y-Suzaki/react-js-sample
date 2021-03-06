import React from 'react';
import './App.css';
// react-reduxに必要なimport
import {increment, decrement} from './actions/counterAction';
import {setName, setAge} from './actions/userAction';
import {addTodo, delTodo, addTodoAsync} from './actions/todoAction';
import {connect} from 'react-redux';
// react-bootstrapに必要なimport
import { Button, FormText } from 'react-bootstrap';

class App extends React.Component {
    setNameForClicked() {
        this.props.setName("tanaka");
    }

    setAgeForClicked() {
        this.props.setAge('100');
    }

    addTodoClicked() {
        this.props.addTodo('NewText');
    }

    delTodoClicked(id) {
        this.props.delTodo(id);
    }

    addTodoAsyncClicked() {
        this.props.addTodoAsync("Async NewText");
    }

    render() {
        return (
            <div className="App">
                {/* props経由でstateやdispatchにアクセス可能 */}
                {/*Clicked: {this.props.count} times.<br/>*/}
                {/*<Button variant="outline-primary" size="1g" onClick={this.props.increment}>+</Button>*/}
                {/*<Button variant="outline-primary" size="1g" onClick={this.props.decrement}>-</Button>*/}
                {/*<div>*/}
                    {/*<Button onClick={this.setNameForClicked.bind(this)}>Set Name</Button>*/}
                    {/*{this.props.name}*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Button onClick={this.setAgeForClicked.bind(this)}>Set Age</Button>*/}
                    {/*{this.props.age}*/}
                {/*</div>*/}
                <Button onClick={this.addTodoClicked.bind(this)}>Add New</Button><br/>
                <Button onClick={this.addTodoAsyncClicked.bind(this)}>Async Add New</Button>
                <ul>
                    {console.log(this.props)}
                    {
                        this.props.todos.map(todo => {
                            return (
                                <li key={todo.id}>
                                    <Button onClick={this.delTodoClicked.bind(this, todo.id)}>Del</Button>
                                    {todo.id}:{todo.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

// React-Reduxを使うための設定
const mapStateToPropsCount = state => {
    return {
        count: state
    }
};

const mapStateToPropsUser = state => {
    return {
        name: state.name,
        age: state.age
    }
};

const mapStateToPropsTodo = state => {
    return {
        todos: state.todos
    }
};

const mapDispatchToPropsCount = dispatch => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
};

const mapDispatchToPropsUser = dispatch => {
    return {
        setName: (name) => dispatch(setName(name)),
        setAge: (age) => dispatch(setAge(age))
    }
};

const mapDispatchToPropsTodo = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        delTodo: (id) => dispatch(delTodo(id)),
        addTodoAsync: (text) => dispatch(addTodoAsync(text))
    }
};

export default connect(mapStateToPropsTodo, mapDispatchToPropsTodo)(App);

