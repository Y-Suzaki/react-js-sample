import React from 'react';

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    // 画面繊維と共にDOMの再生成が行われるため、componentDidMount最新データの表示が可能
    componentDidMount() {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        this.setState({todos: todos});
    }

    addTodo() {
        this.props.history.push("/todos/add");
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
                <button onClick={this.addTodo.bind(this)}>Add New Todo -></button>
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