import React from 'react';
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import Setting from './Setting';

class SettingDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            password: '',
            address: 'Tokyo'
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const user = this.props.users.users.find(user => user.id === id);
        this.setState({
            id: user.id,
            name: user.name,
            password: user.password,
            address: 'Tokyo'});
    }

    render() {
        return (
            <div>
                Id: {this.state.id}<br/>
                Name: {this.state.name}<br/>
                Password: {this.state.password}<br/>
                Address: {this.state.address}<br/>
                <Link  to='/setting'>Back</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps, null)(SettingDetail);
