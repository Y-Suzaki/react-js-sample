import React from 'react';
import { Link } from 'react-router-dom';

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

        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(this.state.newTodo);

        // ローカルストレージに保存（ブラウザリロードしても保存されている）
        // 配列や連想配列の場合、JSON文字列にencodeしてから格納すること
        localStorage.setItem("todos", JSON.stringify(todos));
        this.setState({newTodo: ""});

        // 追加後、Todoリスト画面に戻る
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                {/* Todoリスト画面に戻るリンクを追加 */}
                <Link to="/">Back to Todo List</Link>

                <h3>Welcome ToDo Application</h3>
                <input value={this.state.newTodo} placeholder="Input..." onChange={this.handleChange.bind(this)}/>
                <button onClick={this.addTodo.bind(this)}>Add</button>
                <span>{this.state.newTodo}</span><span>{this.state.errorMsg}</span>
            </div>
        )
    }
}