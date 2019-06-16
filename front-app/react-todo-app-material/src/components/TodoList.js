import React from 'react';
import './TodoList.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    // 画面繊維と共にDOMの再生成が行われるため、componentDidMount最新データの表示が可能
    componentDidMount() {
        console.log("componentDidMount");
        // const todos = JSON.parse(localStorage.getItem("todos")) || [];
        // this.setState({todos: todos});

        // API経由でTodoリストの取得
        fetch("http://localhost:8080/todos")
            .then(response => response.json())
            .then(todos => this.setState({todos: todos}))
            .catch(error => console.error(error));
    }

    addTodo() {
        this.props.history.push("/todos/add");
    }

    delTodo(index) {
        // ローカルストレージに保存（ブラウザリロードしても保存されている）
        // localStorage.setItem("todos", JSON.stringify(this.state.todos));

        // API経由でTodoリストの削除
        const request = {
            method: "DELETE"
        };
        // 変数は``で囲むと、${}で変換できる
        fetch(`http://localhost:8080/todos/${index}`, request)
            .then(() => {
                let todos = this.state.todos;
                todos = todos.filter(todo => todo.id !== index);
                this.setState({todos: todos});
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <div className="toolbar-left"/>
                        <Typography className="toolbar-center">
                            Welcome ToDo Application
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    {
                        this.state.todos.map((todo) => {
                            return (
                                <div key={todo.id}>
                                    <ListItem key={todo.id}>
                                        <ListItemText>{todo.text}</ListItemText>
                                        <IconButton onClick={this.delTodo.bind(this, todo.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </ListItem>
                                    <Divider/>
                                </div>
                            )
                        })
                    }
                </List>
                <div className="bottom-right">
                    <Fab color="primary" aria-label="Add" onClick={this.addTodo.bind(this)}>
                        <AddIcon/>
                    </Fab>
                </div>
            </div>
        )
    }
}