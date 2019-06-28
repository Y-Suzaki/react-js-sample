import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <h5>Todo List</h5>
                <ul>
                    {
                        this.props.todos.map((todo, index) => {
                            return (
                                <TodoItem index={index} todo={todo}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

// 第１引数はdispatchとpropsのマッピングになるが、本Componentでは不要のためnullを渡す
export default connect(mapStateToProps, null)(TodoList);