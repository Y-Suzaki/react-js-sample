import React from 'react';

class Child extends React.Component {
    addValueChild() {
        // 親Componentのaddメソッドをpropsを通して呼んでいる
        this.props.add(10);
    }

    render() {
        return (
            <div>
                {/* 親Componentから渡されたpvalを参照 */}
                <span>{this.props.pval}</span><br/>
                <button onClick={this.addValueChild.bind(this)}>Add</button>
            </div>
        )
    }
}

export default Child;