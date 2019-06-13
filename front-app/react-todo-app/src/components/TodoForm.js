import React from 'react';

// Component単体の動作はclass内で定義する。
// Todoリストに追加、削除のような他のデータに作用を及ぼすような操作については、
// propsを通して親classのメソッドを通してデータを操作すること。
export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

        this.props.addTodoParent(this.state.newTodo);
        this.setState({newTodo: ""});
    }

    render() {
        return (
            <div>
                <h3>Welcome ToDo Application</h3>
                <input value={this.state.newTodo} placeholder="Input..." onChange={this.handleChange.bind(this)}/>
                <button onClick={this.addTodo.bind(this)}>Add</button>
                <span>{this.state.newTodo}</span><span>{this.state.errorMsg}</span>
            </div>
        )
    }
}