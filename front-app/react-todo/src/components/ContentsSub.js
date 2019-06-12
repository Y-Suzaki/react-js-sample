import React from 'react';
import {Link} from "react-router-dom";

export  default class ContentsSub extends React.Component{
    // propsを通して渡されるhistoryを操作
    toPageMain() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h2>Sub Contents Page</h2>
                {/* 別ページに遷移する場合の実装 */}
                <Link to="/">PageMain</Link>
                <button onClick={this.toPageMain.bind(this)}>-> To Page Main</button>
            </div>
        )
    }
}