import React from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
            </div>
        )
    }
}

export default UserAccount;