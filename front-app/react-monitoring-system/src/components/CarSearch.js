import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import FormCheck from 'react-bootstrap/FormCheck'
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
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
                        <Button variant="outline-info" style={{width: 100}}>
                            <FontAwesomeIcon icon="file-export"/>
                            <span className='pl-2'>CSV</span>
                        </Button>
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
                                    <FontAwesomeIcon icon="file-alt"/>
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
                                    <FontAwesomeIcon icon="file-alt"/>
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
                                    <FontAwesomeIcon icon="file-alt"/>
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
                                    <FontAwesomeIcon icon="file-alt"/>
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
                                    <FontAwesomeIcon icon="file-alt"/>
                                </td>
                            </tr>
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

export default CarSearch;