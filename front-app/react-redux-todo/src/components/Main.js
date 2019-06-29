import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Main extends React.Component {
    render() {
        return (
            <div>
                <TodoForm/>
                <TodoList/>
            </div>
        )
    }
}

export default Main;