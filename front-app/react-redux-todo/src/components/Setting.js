import React from 'react';
import {getUsers, getAsyncUsers} from '../actions/UerAsyncAction';
import connect from "react-redux/es/connect/connect";

class Setting extends React.Component {
    componentDidMount() {
        this.props.getAysncUsers();
    }

    render() {
        return (
            <div>
                <h4>Admin Setting</h4>
                <ul>
                    {console.log(this.props)}

                    {
                        this.props.users.users.map((user) => {
                            return (
                                <li key={user.id}>{user.id}:{user.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        gerUsers: () => dispatch(getUsers()),
        getAysncUsers: () => dispatch(getAsyncUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);