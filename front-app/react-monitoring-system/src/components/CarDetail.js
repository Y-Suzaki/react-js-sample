import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                            <Card.Header as="h5">8-series Gran Coupe</Card.Header>
                            <Card.Body>
                                <Card.Title>Serial No. C000001</Card.Title>
                                <Card.Text>
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
                                    Sensor01/ Sensor02 / Sensor03 / Sensor04
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
                                        <Area dataKey="wearRate" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} strokeWidth={1}/>
                                        <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')}/>
                                        <ReferenceLine y="25" stroke="red" />
                                        <ReferenceLine y="50" stroke="#ffc658"/>
                                        <CartesianGrid strokeDasharray="1 1"/>
                                        <Legend verticalAlign="top"/>
                                    </AreaChart>
                                </ResponsiveContainer>
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
                                        <Area dataKey="wearRate" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} strokeWidth={1}/>
                                        <Tooltip />
                                        <ReferenceLine y="25" stroke="red" />
                                        <ReferenceLine y="50" stroke="#ffc658"/>
                                        <CartesianGrid strokeDasharray="1 1"/>
                                        <Legend verticalAlign="top"/>
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
                                        <Area dataKey="wearRate" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} strokeWidth={1}/>
                                        <Tooltip />
                                        <ReferenceLine y="25" stroke="red" />
                                        <ReferenceLine y="50" stroke="#ffc658"/>
                                        <CartesianGrid strokeDasharray="1 1"/>
                                        <Legend verticalAlign="top"/>
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
                                        <Area dataKey="wearRate" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} strokeWidth={1}/>
                                        <Tooltip />
                                        <ReferenceLine y="25" stroke="red" />
                                        <ReferenceLine y="50" stroke="#ffc658"/>
                                        <CartesianGrid strokeDasharray="1 1"/>
                                        <Legend verticalAlign="top"/>
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