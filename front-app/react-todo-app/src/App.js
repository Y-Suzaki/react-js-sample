import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// Gridレイアウトと、各Componentの呼び出し程度のHTMLにしておく。
// 各Componentの操作によって、Component外のデータに影響を及ぼす場合、本classにメソッドを定義する。
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: ["default-1", "default-2"]
        }
    }

    componentDidMount() {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        this.setState({todos: todos});
    }

    // newTodoは子Component側から渡される
    addTodo(newTodo) {
        const todos = this.state.todos;
        todos.push(newTodo);
        this.setState({newTodo: todos});

        // ローカルストレージに保存（ブラウザリロードしても保存されている）
        // 配列や連想配列の場合、JSON文字列にencodeしてから格納すること
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    // indexは子Component側から渡される
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
            <div className="App">
                {/* Todoリスト操作用のメソッド、Todoリストのデータをpropsとして渡しておく */}
                <TodoForm addTodoParent={this.addTodo.bind(this)}/>
                <TodoList delTodoParent={this.delTodo.bind(this)} todos={this.state.todos}/>
            </div>
        );
    }
}
