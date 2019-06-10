import React from 'react';
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            changeResult: "change result default.",
            toDos: [
                {id: "1", text: "ToDo-1"},
                {id: "2", text: "ToDo-2"},
                {id: "3", text: "ToDo-3"}
            ]
        }
    }

    deleteToDos(id) {
        let toDos = this.state.toDos;
        toDos = toDos.filter(toDo => toDo.id !== id);
        this.setState({toDos: toDos})
    }

    onChange(e) {
        // Need to user setState function.
        this.setState({changeResult: e.target.value})
    }

    render() {
        return (
            <div>
                <p>
                    <span>Input & OnChange</span><br/>
                    <input value={this.state.changeResult} onChange={this.onChange.bind(this)}/><br/>
                    <span>{this.state.changeResult}</span>
                </p>
                <p>
                    <span>Array & OnClick</span>
                    <ul>
                        {
                            this.state.toDos.map(toDo => {
                                return (
                                    <li key={toDo.id}>{toDo.text}
                                        <button onClick={this.deleteToDos.bind(this, toDo.id)}>del</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </p>
            </div>
        )
    }
}

export default App;
