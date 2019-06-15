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
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        this.setState({todos: todos});
    }

    addTodo() {
        this.props.history.push("/todos/add");
    }

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
                        this.state.todos.map((todo, i) => {
                            return (
                                <div>
                                    <ListItem key={i}>
                                        <ListItemText>{todo}</ListItemText>
                                        <IconButton onClick={this.delTodo.bind(this, i)}>
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
                    <Fab variant="fab" color="primary" aria-label="Add" onClick={this.addTodo.bind(this)}>
                        <AddIcon/>
                    </Fab>
                </div>
            </div>
        )
    }
}