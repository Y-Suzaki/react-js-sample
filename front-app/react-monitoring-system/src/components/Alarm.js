import React from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Alarm extends React.Component {
    render() {
        return (
            <div className='pt-3'>
                <Card className='mt-2 mx-4'>
                    <Card.Body className='pb-1'>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column>
                                    閾値設定
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    摩耗警告
                                </Form.Label>
                                <Col sm="8" className='d-inline-block'>
                                    摩耗率が
                                    <div className='d-inline-block'>dd</div>
                                    <Form.Control className='d-inline-block'/>
                                    %以下になった場合に通知
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    摩耗エラー
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    通信エラー
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                </Col>
                            </Form.Group>
                            <hr/>
                            <Form.Group as={Row}>
                                <Form.Label column>
                                    通知先設定
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="info" className='d-block w-25'>更新</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default Alarm;