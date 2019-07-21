import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import car from './car.png';
import moment from 'moment';
import { ResponsiveContainer, CartesianGrid, ReferenceLine, Tooltip, Legend, Area, AreaChart, LineChart, Line, XAxis, YAxis } from 'recharts';

class CarDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                dataNormal: [
                    { date: moment('2018-12-01').unix() * 1000, wearRate: 100 },
                    { date: moment('2018-12-02').unix() * 1000, wearRate: 95 },
                    { date: moment('2018-12-03').unix() * 1000, wearRate: 88 },
                    { date: moment('2018-12-04').unix() * 1000, wearRate: 84 },
                    { date: moment('2018-12-05').unix() * 1000, wearRate: 80 },
                    { date: moment('2018-12-06').unix() * 1000, wearRate: 75 },
                    { date: moment('2018-12-07').unix() * 1000, wearRate: 70 }
                ],
                dataWarn: [
                    { date: moment('2018-12-01').unix() * 1000, wearRate: 100 },
                    { date: moment('2018-12-02').unix() * 1000, wearRate: 95 },
                    { date: moment('2018-12-03').unix() * 1000, wearRate: 80 },
                    { date: moment('2018-12-04').unix() * 1000, wearRate: 70 },
                    { date: moment('2018-12-05').unix() * 1000, wearRate: 55 },
                    { date: moment('2018-12-06').unix() * 1000, wearRate: 45 },
                    { date: moment('2018-12-07').unix() * 1000, wearRate: 35 }
                ],
                dataError: [
                    { date: moment('2018-12-01').unix() * 1000, wearRate: 100 },
                    { date: moment('2018-12-02').unix() * 1000, wearRate: 90 },
                    { date: moment('2018-12-03').unix() * 1000, wearRate: 70 },
                    { date: moment('2018-12-04').unix() * 1000, wearRate: 50 },
                    { date: moment('2018-12-05').unix() * 1000, wearRate: 35 },
                    { date: moment('2018-12-06').unix() * 1000, wearRate: 20 },
                    { date: moment('2018-12-07').unix() * 1000, wearRate: 15 }
                ]
            }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <Card className='mt-4'>
                            <Card.Header as="h5" className='text-white p-2 text-center' style={{backgroundColor:"#428bca", opacity:0.5}}>TOYOTA CROWN C000001</Card.Header>
                            <Card.Img variant="top" src={car} style={{width: 150}} className='py-3 mx-auto'/>
                            <Card.Body>
                                <Card.Text>
                                    <ListGroup variant="flush">,
                                        <ListGroup.Item className='d-flex justify-content-between'>
                                            <div>事業所</div>
                                            <div>東京第一</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className='d-flex justify-content-between'>
                                            <div>登録日時</div>
                                            <div>2019-07-10 12:12:12</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className='d-flex justify-content-between'>
                                            <div>通信状態</div>
                                            <div>
                                                <Badge variant="primary">正常</Badge>
                                                <Badge variant="danger">異常</Badge>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <CardDeck className='mt-4'>
                            <Card style={{height: 300}}>
                                <span className='mt-3 ml-3 text-muted'>Sensor001</span>
                                <ResponsiveContainer>
                                    <AreaChart
                                        data={this.state.dataNormal}
                                        margin={{
                                            top: 5, right: 30, left: 5, bottom: 5,
                                        }}>
                                        <XAxis dataKey="date" tick={{fontSize: 10}} tickFormatter={x => moment(x).format('MM/DD')}/>
                                        <YAxis tick={{fontSize: 10}} unit='%'/>
                                        <Area dataKey="wearRate" stroke="#428bca" fill="#428bca" fillOpacity={0.2} strokeWidth={1}/>
                                        <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')} wrapperStyle={{fontSize: 10}}/>
                                        <ReferenceLine y="25" stroke="red" />
                                        <ReferenceLine y="50" stroke="#ffc658"/>
                                        <CartesianGrid strokeDasharray="1 1"/>
                                        <Legend verticalAlign="top" wrapperStyle={{fontSize: 10}}/>
                                    </AreaChart>
                                </ResponsiveContainer>
                                <Card.Footer className='p-2 bg-white'>
                                    <span className='text-muted small'>Last Update 2019/11/11 12:12:12</span>
                                </Card.Footer>
                            </Card>
                            <Card className='card-border-error'  style={{height: 300}}>
                                <span className='mt-3 ml-3 text-muted'>Sensor001</span>
                                <ResponsiveContainer>
                                    <AreaChart
                                        data={this.state.dataError}
                                        margin={{
                                            top: 5, right: 30, left: 5, bottom: 5,
                                        }}>
                                        <XAxis dataKey="date" tick={{fontSize: 10}} tickFormatter={x => moment(x).format('MM/DD')}/>
                                        <YAxis tick={{fontSize: 10}} unit='%'/>
                                        <Area dataKey="wearRate" stroke="#428bca" fill="#428bca" fillOpacity={0.2} strokeWidth={1}/>
                                        <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')} wrapperStyle={{fontSize: 10}}/>
                                        <ReferenceLine y="25" stroke="red" />
                                        <ReferenceLine y="50" stroke="#ffc658"/>
                                        <CartesianGrid strokeDasharray="1 1"/>
                                        <Legend verticalAlign="top" wrapperStyle={{fontSize: 10}}/>
                                    </AreaChart>
                                </ResponsiveContainer>
                            </Card>
                        </CardDeck>
                        <CardDeck className='my-4'>
                            <Card style={{height: 300}}>
                                <span className='mt-3 ml-3 text-muted'>Sensor001</span>
                                <ResponsiveContainer>
                                    <AreaChart
                                        data={this.state.dataNormal}
                                        margin={{
                                            top: 5, right: 30, left: 5, bottom: 5,
                                        }}>
                                        <XAxis dataKey="date" tick={{fontSize: 10}} tickFormatter={x => moment(x).format('MM/DD')}/>
                                        <YAxis tick={{fontSize: 10}} unit='%'/>
                                        <Area dataKey="wearRate" stroke="#428bca" fill="#428bca" fillOpacity={0.2} strokeWidth={1}/>
                                        <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')} wrapperStyle={{fontSize: 10}}/>
                                        <ReferenceLine y="25" stroke="red" />
                                        <ReferenceLine y="50" stroke="#ffc658"/>
                                        <CartesianGrid strokeDasharray="1 1"/>
                                        <Legend verticalAlign="top" wrapperStyle={{fontSize: 10}}/>
                                    </AreaChart>
                                </ResponsiveContainer>
                            </Card>
                            <Card border="warning" style={{height: 300}}>
                                <span className='mt-3 ml-3 text-muted'>Sensor001</span>
                                <ResponsiveContainer>
                                    <AreaChart
                                        data={this.state.dataWarn}
                                        margin={{
                                            top: 5, right: 30, left: 5, bottom: 5,
                                        }}>
                                        <XAxis dataKey="date" tick={{fontSize: 10}} tickFormatter={x => moment(x).format('MM/DD')}/>
                                        <YAxis tick={{fontSize: 10}} unit='%'/>
                                        <Area dataKey="wearRate" stroke="#428bca" fill="#428bca" fillOpacity={0.2} strokeWidth={1}/>
                                        <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')} wrapperStyle={{fontSize: 10}}/>
                                        <ReferenceLine y="25" stroke="red" />
                                        <ReferenceLine y="50" stroke="#ffc658"/>
                                        <CartesianGrid strokeDasharray="1 1"/>
                                        <Legend verticalAlign="top" wrapperStyle={{fontSize: 10}}/>
                                    </AreaChart>
                                </ResponsiveContainer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CarDetail;