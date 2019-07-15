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
                    <ListGroup.Item action>
                        <span className='h5 mr-2'>XXXXXXXX</span>
                        <Badge pill variant="primary">
                            Primary
                        </Badge>
                        <div className='d-sm-flex'>
                            <div className='mr-2'>CCCCC</div>
                            <div className='mr-2'>AAAAAAAAAa</div>
                            <div className='text-muted'>Sensor1 / Sensor2 / Sensor3 / Sensor4</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default CarSearch;