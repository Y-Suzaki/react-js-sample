import React from 'react';

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        this.setState({todos: todos});
    }

    delTodo(index) {
        const todos = this.state.todos;
        // splice(index, 個数)で、指定のindex位置から指定個数の要素を削除する
        todos.splice(index, 1);
        this.setState({todos: todos});

        // ローカルストレージに保存（ブラウザリロードしても保存されている）
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    render() {
        return (
            <div>
                <h5>Todo List</h5>
                <ul>
                    {
                        this.state.todos.map((todo, index) => {
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