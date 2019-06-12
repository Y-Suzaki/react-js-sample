import React from 'react';
import './App.css';
import Child from './components/Child'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            changeResult: "change result default.",
            toDos: [
                {id: "1", text: "ToDo-1"},
                {id: "2", text: "ToDo-2"},
                {id: "3", text: "ToDo-3"}
            ],
            parentValue: 100
        }
    }

    // Child Componentにpropsを通して渡される
    // 子のComponent側で振る舞いだけ決めておき、状態は親側からpropsとして渡すことができれば、
    // 部品を共通化しても色々表示を変えることができる。
    addValuePrent() {
        const newParentValue = this.state.parentValue + 100;
        this.setState({parentValue: newParentValue})
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
                    <span><b>Input & OnChange</b></span><br/>
                    <input value={this.state.changeResult} onChange={this.onChange.bind(this)}/><br/>
                    <span>{this.state.changeResult}</span>
                </p>
                <p>
                    <span><b>Parent & Child Components</b></span>
                    <Child pval={this.state.parentValue} add={this.addValuePrent.bind(this)}/>
                </p>
                <p>
                    <span><b>Array & OnClick</b></span>
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
