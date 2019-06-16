import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './TodoForm.css';

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

        // const todos = JSON.parse(localStorage.getItem("todos")) || [];
        // todos.push(this.state.newTodo);
        //
        // // ローカルストレージに保存（ブラウザリロードしても保存されている）
        // // 配列や連想配列の場合、JSON文字列にencodeしてから格納すること
        // localStorage.setItem("todos", JSON.stringify(todos));
        // this.setState({newTodo: ""});

        // API経由でTodoリストの保存
        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({text: this.state.newTodo})
        };
        // 非同期呼び出しなので、コールバック関数内でhistory.push()する必要がある。
        fetch("http://localhost:8080/todos", request)
            .then(() => {
                this.setState({newTodo: ""});
                this.props.history.push("/");
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        {/* classは予約変数のため、cssはclassNameで指定すること */}
                        <Link to="/" className="toolbar-left">
                            <ArrowBack className="allow-back"/>
                        </Link>
                        <Typography className="toolbar-center">
                            Welcome ToDo Application
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Card>
                    <CardContent>
                        <TextField className="input-field"
                                   value={this.state.newTodo} placeholder="Input..." onChange={this.handleChange.bind(this)}/>
                    </CardContent>
                    <CardActions>
                        {/* containedはいわゆる普通のボタンになる */}
                        <Button color="primary" variant ="contained" onClick={this.addTodo.bind(this)}>Add</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}