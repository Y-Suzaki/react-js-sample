import React from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: [
              {id: "1", text: "Todo-1"},
              {id: "2", text: "Todo-2"},
              {id: "3", text: "Todo-3"}
          ]
        }
    }

    delTodo(index) {
      console.log(index);
        const todos = this.state.todos;
        this.setState({todos: todos.filter(todo => todo.id !== index)});
        console.log(this.state.todos);
    }

    render() {
      return(
          <div>
            <h5>Todo List</h5>
            <List>
                {
                    this.state.todos.map(todo => {
                        return (
                            <div>
                                <ListItem key={todo.id}>
                                    <ListItemText>{todo.text}</ListItemText>
                                    <IconButton variant="fab" area-label="delete" onClick={this.delTodo.bind(this, todo.id)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItem>
                                <Divider/>
                            </div>
                        )
                    })
                }
            </List>
          </div>
      )
    }
}