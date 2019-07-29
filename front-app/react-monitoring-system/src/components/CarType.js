import React from 'react';
import Table from 'react-bootstrap/Table'
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class CarType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [
                {
                    name: 'aaa',
                    flag: false,
                    info: 'info'
                },
                {
                    name: 'aaa',
                    flag: false,
                    info: 'info'
                }
            ]
        }
    }

    render() {
        return (
            <div className='mt-4'>
                <Card>
                    <Table responsive hover className='mt-2'>
                        <thead>
                            <tr>
                                <th>要素名</th>
                                <th>個人情報フラグ</th>
                                <th>デスクリプション</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Form.Group>
                                        <Form.Control type="text" value={this.state.elements.name}/>
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </td>
                                <td>
                                    <Form.Group>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </td>
                                <td>
                                    <FontAwesomeIcon icon="file-alt" className='text-black-50 text-center icon-link-custom'/>
                                </td>
                                {
                                    this.state.elements.map((element, index) => {
                                        console.log(index);
                                        if(index === 0) {
                                            return (
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>{element.flag}</td>
                                                    <td>{element.info}</td>
                                                    <td>a</td>
                                                </tr>
                                            )
                                        } else {

                                        }
                                    })
                                }
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </div>
        )
    }
}