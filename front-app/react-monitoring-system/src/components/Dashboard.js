import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTruckMonster);

class Dashboard extends React.Component {
    render() {
        return (
            <div className='p-3'>
                <CardDeck>
                    <Card bg='info' text="white">
                        <Card.Body className='d-flex'>
                            <div>
                                <FontAwesomeIcon size='lg' icon="truck-monster" className='d-block mb-2'/>
                                <span className='small'>車両数</span>
                            </div>
                            <div className='ml-auto'>
                                <span className='h1'>30909</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card bg='info' text="white">
                        <Card.Body className='d-flex'>
                            <div>
                                <FontAwesomeIcon size='lg' icon="truck-monster" className='d-block mb-2'/>
                                <span className='small'>車両数</span>
                            </div>
                            <div className='ml-auto'>
                                <span className='h1'>30909</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card bg='info' text="white">
                        <Card.Body className='d-flex'>
                            <div>
                                <FontAwesomeIcon size='lg' icon="truck-monster" className='d-block mb-2'/>
                                <span className='small'>車両数</span>
                            </div>
                            <div className='ml-auto'>
                                <span className='h1'>30909</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card bg='info' text="white">
                        <Card.Body className='d-flex'>
                            <div>
                                <FontAwesomeIcon size='lg' icon="truck-monster" className='d-block mb-2'/>
                                <span className='small'>車両数</span>
                            </div>
                            <div className='ml-auto'>
                                <span className='h1'>30909</span>
                            </div>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck className='mt-3'>
                    <Card>
                        <Card.Body>
                            aa
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            aa
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Dashboard;