import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'

class CarSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {
                    carType: 'Honda Fit',
                    carSerialNo: 'CH00001',
                    office: 'Tokyo',
                    status: 'OK'
                },
                {
                    carType: 'Honda Fit',
                    carSerialNo: 'CH00001',
                    office: 'Tokyo',
                    status: 'OK'
                },
                {
                    carType: 'Honda Fit',
                    carSerialNo: 'CH00001',
                    office: 'Tokyo',
                    status: 'OK'
                },
                {
                    carType: 'Honda Fit',
                    carSerialNo: 'CH00001',
                    office: 'Tokyo',
                    status: 'OK'
                },
                {
                    carType: 'Honda Fit',
                    carSerialNo: 'CH00001',
                    office: 'Tokyo',
                    status: 'OK'
                }
            ]
        };
    }

    render() {
        return (
            <div className='pt-3'>
                <b>車両検索</b>
                <Card className='mt-2 mx-4'>
                    <Card.Body className='pb-1'>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} className='col-3'>
                                    {/*<Form.Label>事業所名</Form.Label>*/}
                                    <Form.Control as="select">
                                        <option>全て</option>
                                        <option>東京事業所</option>
                                        <option>神奈川事業所</option>
                                        <option>埼玉事業所</option>
                                    </Form.Control>
                                </Form.Group>
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

                {/*<ListGroup variant="flush" className='mt-3'>*/}
                    {/*{*/}
                        {/*this.state.cars.map(car => {*/}
                            {/*return (*/}
                                {/*<ListGroup.Item action as={Link} to='/car'>*/}
                                    {/*<span className='h5 mr-2'>{car.carType}</span>*/}
                                    {/*<Badge pill variant="primary">*/}
                                        {/*{car.status}*/}
                                    {/*</Badge>*/}
                                    {/*<div className='d-sm-flex'>*/}
                                        {/*<div className='mr-2'>{car.carSerialNo}</div>*/}
                                        {/*<div className='mr-2'>{car.office}</div>*/}
                                        {/*<div className='text-muted'>Sensor1 / Sensor2 / Sensor3 / Sensor4</div>*/}
                                    {/*</div>*/}
                                {/*</ListGroup.Item>*/}
                            {/*)*/}
                        {/*})*/}
                    {/*}*/}
                {/*</ListGroup>*/}
                <Card className='mt-2 mb-4 mx-4 p-4'>
                <Table responsive hover striped bordered>
                    <thead>
                    <tr>
                        <th className='bg-secondary'>#</th>
                        <th className='bg-secondary'>Table heading</th>
                        <th className='bg-secondary'>Table heading</th>
                        <th className='bg-secondary'>Table heading</th>
                        <th className='bg-secondary'>Table heading</th>
                        <th className='bg-secondary'>Table heading</th>
                        <th className='bg-secondary'>Table heading</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='text-black-50'>1</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                    </tr>
                    <tr>
                        <td className='text-black-50'>2</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                    </tr>
                    <tr>
                        <td className='text-black-50'>4</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                    </tr>
                    <tr>
                        <td className='text-black-50'>5</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                    </tr>
                    <tr>
                        <td className='text-black-50'>3</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                        <td className='text-black-50'>Table cell</td>
                    </tr>
                    </tbody>
                </Table>
                </Card>
            </div>
        )
    }
}

export default CarSearch;