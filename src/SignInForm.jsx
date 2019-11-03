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
import ReactDOM from 'react-dom';
import Fullpage from './Fullpage.jsx'

class UserForm extends Component {
  render() {
    return (
      <>
        <div className="App bg" >
          <header className="App-header">

            <center><h2>Login</h2></center>
            <Form style={{ marginLeft: '44rem', marginRight: '44rem', padding: '15px', border: '2px solid grey' }}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" style={{ width: "100%" }} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" style={{ width: "100%" }} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={() => ReactDOM.render(<Fullpage />, document.getElementById('root'))}>
                Sign in
  </Button>
            </Form>
          </header>
        </div>


      </>
    )
  }
}
export default UserForm;
