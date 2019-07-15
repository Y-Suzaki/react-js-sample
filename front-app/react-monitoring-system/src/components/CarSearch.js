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
            <div className='mt-3'>
                <span className='h4'>Car Search</span>
                <Form className='mt-2'>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Keyword</Form.Label>
                            <InputGroup>
                                <Form.Control type="email" placeholder="Enter email" />
                                <InputGroup.Append>
                                    <DropdownButton variant="outline-info" id="dropdown-basic-button" title="Office">
                                        <Dropdown.Item href="#/action-1">Tokyo</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Kanagawa</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Saitama</Dropdown.Item>
                                    </DropdownButton>
                                    <Button variant="info">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <ListGroup variant="flush">
                    {
                        this.state.cars.map(car => {
                            return (
                                <ListGroup.Item action as={Link} to='/car'>
                                    <span className='h5 mr-2'>{car.carType}</span>
                                    <Badge pill variant="primary">
                                        {car.status}
                                    </Badge>
                                    <div className='d-sm-flex'>
                                        <div className='mr-2'>{car.carSerialNo}</div>
                                        <div className='mr-2'>{car.office}</div>
                                        <div className='text-muted'>Sensor1 / Sensor2 / Sensor3 / Sensor4</div>
                                    </div>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}

export default CarSearch;