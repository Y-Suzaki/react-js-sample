import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// Gridレイアウトと、各Componentの呼び出し程度のHTMLにしておく。
// 各Componentの操作によって、Component外のデータに影響を及ぼす場合、本classにメソッドを定義する。
export default class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <TodoForm/>
                <TodoList/>
            </div>
        );
    }
}
