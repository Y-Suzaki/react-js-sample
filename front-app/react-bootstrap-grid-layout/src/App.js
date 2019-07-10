import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    nameFirst: 'Tanaka',
                    nameLast: 'Ichiro',
                    address: 'Tokyo',
                    age: 20,
                    department: 'sales'
                },
                {
                    nameFirst: 'Suzuki',
                    nameLast: 'Jiro',
                    address: 'Saitama',
                    age: 20,
                    department: 'sales'
                },
                {
                    nameFirst: 'Hayashi',
                    nameLast: 'Saburo',
                    address: 'Okinawa',
                    age: 20,
                    department: 'sales'
                }
            ]
        }
    }

    render() {
        return (
            <div className="m-4 w-50">
                <Table striped hover bordered>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Department</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.nameFirst}</td>
                                    <td>{user.nameLast}</td>
                                    <td>{user.address}</td>
                                    <td>{user.age}</td>
                                    <td>{user.department}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
                {/* テーブルが入りきらないサイズになると、スクロールバーが表示 */}
                <Table striped hover bordered responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Department</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.nameFirst}</td>
                                    <td>{user.nameLast}</td>
                                    <td>{user.address}</td>
                                    <td>{user.age}</td>
                                    <td>{user.department}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default App;
