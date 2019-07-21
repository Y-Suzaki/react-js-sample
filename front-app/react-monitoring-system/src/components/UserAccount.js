import React from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import FormCheck from "react-bootstrap/FormCheck";
import Pagination from "react-bootstrap/Pagination";

class UserAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    email: "tanaka-ichiro@gmail.com",
                    firstName: "田中",
                    lastName: "一郎",
                    department: "営業部"
                },
                {
                    email: "tanaka-ichiro@gmail.com",
                    firstName: "田中",
                    lastName: "一郎",
                    department: "営業部"
                },
                {
                    email: "tanaka-ichiro@gmail.com",
                    firstName: "田中",
                    lastName: "一郎",
                    department: "営業部"
                },
                {
                    email: "tanaka-ichiro@gmail.com",
                    firstName: "田中",
                    lastName: "一郎",
                    department: "営業部"
                }
            ]
        }
    }

    render() {
        return (
            <div className='pt-3'>
                <Card className='mt-2 mx-4'>
                    <Card.Body className='pb-1'>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} className='col-3'>
                                    {/*<Form.Label>キーワード</Form.Label>*/}
                                    <Form.Control type="text" placeholder="キーワード" />
                                </Form.Group>
                                <Form.Group as={Col} className='col-6'>
                                    <Button variant="info" className='d-block w-25'>検索</Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
                <Card className='mt-2 mb-4 mx-4'>
                    <Card.Body>
                        <Button variant="outline-info" className='ml-3' style={{width: 100}}>
                            <FontAwesomeIcon icon="trash-alt"/>
                            <span className='pl-2'>削除</span>
                        </Button>
                        <Table responsive hover className='mt-2'>
                            <thead>
                            <tr>
                                <td className='text-black-50'>
                                    <FormCheck/>
                                </td>
                                <th>ユーザー名</th>
                                <th>E-mail</th>
                                <th>部署</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(user => {
                                        return (
                                            <tr>
                                                <td className='text-black-50'>
                                                    <FormCheck/>
                                                </td>
                                                <td className='text-black-50'>
                                                    {user.firstName + " " + user.lastName}
                                                </td>
                                                <td className='text-black-50'>{user.email}</td>
                                                <td className='text-black-50'>{user.department}</td>
                                                <td className='text-black-50 text-center icon-link-custom'>
                                                    <FontAwesomeIcon icon="edit"/>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>
                        <div className='d-flex justify-content-between'>
                            <span className='small text-muted'>1 to 10 of 57</span>
                            <Pagination>
                                <Pagination.Prev />
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Item>{6}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default UserAccount;