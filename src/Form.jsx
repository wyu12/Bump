import React, { Component } from 'react';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class UserForm extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <body>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalFirstName">
            <Form.Label column sm={1}>First Name
            </Form.Label>
            <Form.Control type="firstname" placeholder="First Name" style={{width: "30%"}} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group as={Row} controlId="formLastName">
            <Form.Label column sm={1}>Last Name</Form.Label>
            <Form.Control type="lastname" placeholder="Last Name" style={{width: "30%"}} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group as={Row} controlId="formWeeksPregnant">
            <Form.Label column sm={1}>Weeks Pregnant</Form.Label>
            <Form.Control type="weeks" placeholder="Enter Weeks Pregnant" style={{width: "30%"}} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column sm={1}>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" style={{width: "30%"}} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicPassword">
            <Form.Label column sm={1}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" style={{width: "30%"}} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
        </body>
        
      </>
    )
  }
}
export default UserForm;