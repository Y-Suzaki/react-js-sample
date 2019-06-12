import React from 'react';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: ["default-1", "default-2"],
            newTodo: "",
            errorMsg: ""
        }
    }

    handleChange(event) {
        this.setState({newTodo: event.target.value});
    }

    addTodo() {
        this.setState({errorMsg: ""});
        if (this.state.newTodo === "") {
            this.setState({errorMsg: "Not allowed empty."});
            return;
        }
        const todos = this.state.todos;
        todos.push(this.state.newTodo);
        this.setState({newTodo: todos});
        this.setState({newTodo: ""});
    }

    delTodo(index) {
        const todos = this.state.todos;
        // splice(index, 個数)で、指定のindex位置から指定個数の要素を削除する
        todos.splice(index, 1);
        this.setState({todos: todos});
    }

    render() {
        return (
            <div className="App">
                <h3>Welcome ToDo Application</h3>
                <input value={this.state.newTodo} placeholder="Input..." onChange={this.handleChange.bind(this)}/>
                <button onClick={this.addTodo.bind(this)}>Add</button>
                <span>{this.state.newTodo}</span><span>{this.state.errorMsg}</span>

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
        );
    }
}
