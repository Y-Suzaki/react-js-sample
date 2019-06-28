import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
    render() {
        return (
            <div>
                <TodoForm/>
                <TodoList/>
            </div>
        )
    }
}

export default App;
