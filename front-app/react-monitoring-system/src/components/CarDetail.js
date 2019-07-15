import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { ResponsiveContainer, CartesianGrid, ReferenceLine, Tooltip, Legend, LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

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
            <div>
                <CardDeck>
                    <Card>
                        <Card.Header as="h5">8-series Gran Coupe</Card.Header>
                        <Card.Body>
                            <Card.Title>Serial No. C000001</Card.Title>
                            <Card.Text>
                                Sensor01/ Sensor02 / Sensor03 / Sensor04
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck className='mt-2'>
                    <Card style={{height: 300}}>
                        <Card.Header>Sensor01</Card.Header>
                        <ResponsiveContainer>
                            <LineChart
                                data={this.state.dataNormal}
                                margin={{
                                    top: 10, right: 20, left: 5, bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="5 5" />
                                <XAxis dataKey="date" tickFormatter={x => moment(x).format('MM/DD')}/>
                                <YAxis unit='%'/>
                                <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')}/>
                                <Legend/>
                                <ReferenceLine y="25" stroke="red" />
                                <ReferenceLine y="50" stroke="#ffc658"/>
                                <Line type="monotone" dataKey="wearRate" stroke="#413ea0" strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                    <Card border="danger" style={{height: 300}}>
                        <Card.Header>Sensor02</Card.Header>
                        <ResponsiveContainer>
                            <LineChart
                                data={this.state.dataError}
                                margin={{
                                    top: 10, right: 20, left: 5, bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="5 5" />
                                <XAxis dataKey="date" tickFormatter={x => moment(x).format('MM/DD')}/>
                                <YAxis unit='%'/>
                                <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')}/>
                                <Legend/>
                                <ReferenceLine y="25" stroke="red"/>
                                <ReferenceLine y="50" stroke="#ffc658"/>
                                <Line type="monotone" dataKey="wearRate" stroke="#413ea0" strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </CardDeck>
                <CardDeck className='mt-2'>
                    <Card style={{height: 300}}>
                        <Card.Header>Sensor03</Card.Header>
                        <ResponsiveContainer>
                            <LineChart
                                data={this.state.dataNormal}
                                margin={{
                                    top: 10, right: 20, left: 5, bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="5 5" />
                                <XAxis dataKey="date" tickFormatter={x => moment(x).format('MM/DD')}/>
                                <YAxis unit='%'/>
                                <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')}/>
                                <Legend/>
                                <ReferenceLine y="25" stroke="red"/>
                                <ReferenceLine y="50" stroke="#ffc658"/>
                                <Line type="monotone" dataKey="wearRate" stroke="#413ea0" strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                    <Card border="warning" style={{height: 300}}>
                        <Card.Header>Sensor04</Card.Header>
                        <ResponsiveContainer>
                            <LineChart
                                data={this.state.dataWarn}
                                margin={{
                                    top: 10, right: 20, left: 5, bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="5 5" />
                                <XAxis dataKey="date" tickFormatter={x => moment(x).format('MM/DD')}/>
                                <YAxis unit='%'/>
                                <Tooltip labelFormatter={x => moment(x).format('YYYY/MM/DD')}/>
                                <Legend/>
                                <ReferenceLine y="25" stroke="red"/>
                                <ReferenceLine y="50" stroke="#ffc658"/>
                                <Line type="monotone" dataKey="wearRate" stroke="#413ea0" strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default CarDetail;