import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import FormCheck from 'react-bootstrap/FormCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

    moveDetail() {
        this.props.history.push("/car");
    }

    render() {
        return (
            <div className='pt-3'>
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
                <Card className='mt-2 mb-4 mx-4'>
                    <Card.Body>
                        <Button variant="info">CSV Export</Button>
                        <Table responsive hover className='mt-2'>
                            <thead>
                            <tr>
                                <td className='text-black-50'>
                                    <FormCheck/>
                                </td>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className='text-black-50'>
                                    <FormCheck/>
                                </td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50 text-center icon-link-custom' onClick={this.moveDetail.bind(this)}>
                                    <FontAwesomeIcon icon="chevron-right"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-black-50'>
                                    <FormCheck/>
                                </td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50 text-center icon-link-custom'>
                                    <FontAwesomeIcon icon="chevron-right"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-black-50'>
                                    <FormCheck/>
                                </td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50 text-center icon-link-custom'>
                                    <FontAwesomeIcon icon="chevron-right"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-black-50'>
                                    <FormCheck/>
                                </td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50 text-center icon-link-custom'>
                                    <FontAwesomeIcon icon="chevron-right"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-black-50'>
                                    <FormCheck/>
                                </td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50'>Table cell</td>
                                <td className='text-black-50 text-center icon-link-custom'>
                                    <FontAwesomeIcon icon="chevron-right"/>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CarSearch;