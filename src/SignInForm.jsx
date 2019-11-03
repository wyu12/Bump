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
          <div style={{marginLeft:'0.8rem', marginTop: '0.8rem'}}> 
          <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" style={{width: "30%"}} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" style={{width: "30%"}} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
  </Button>
  </Form>
          </div>
        </body>
      </>
    )
  }
}
export default UserForm;