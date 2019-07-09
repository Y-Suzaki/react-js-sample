import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col xs={6}>
                    <Navbar bg="dark" variant="dark" defaultActiveKey="link-1">
                        <Navbar.Brand>
                            BootStrap
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link eventKey="link-1">Link-1</Nav.Link>
                            <Nav.Link eventKey="link-1">Link-2</Nav.Link>
                            <Nav.Link eventKey="link-1">Link-3</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Col xs={6}>
                    <Navbar bg="light" variant="light" defaultActiveKey="link-1">
                        <Navbar.Brand>
                            BootStrap
                        </Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <Navbar bg="light" variant="light" defaultActiveKey="link-1">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Col xs={8}>
                    <Form>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text"/>
                            <Form.Text className="text-muted">
                                Input User Name
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                Input Email
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
