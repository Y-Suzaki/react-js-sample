import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import ContentsMain from './components/ContentsMain'
import ContentsSub from './components/ContentsSub'

class App extends React.Component{
    render() {
        return (
            <div>
                <h1>Welcome to you.</h1>
                {/* ルーティングしたいパスとComponentを設定する*/}
                {/* exact=trueで完全一致になる。（デフォルトは前方一致）*/}
                <Route path="/" component={ContentsMain} exact={true}/>
                <Route path="/pagesub" component={ContentsSub}/>
            </div>
        )
    }
}

export default App;
