import React from 'react';

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
    }

    delTodo(index) {
        this.props.delTodoParent(index);
    }

    render() {
        return (
            <div>
                <h5>Todo List</h5>
                <ul>
                    {
                        this.props.todos.map((todo, index) => {
                            return (
                                <li key={index}>{todo}
                                    <button onClick={this.delTodo.bind(this, index)}>Del</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}