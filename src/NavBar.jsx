import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import SignUpForm from './SignUpForm.jsx';
import Fullpage from './Fullpage.jsx';


const navStyle = {
  Navbar: {
    position: 'sticky',
    top: 0,
  }
};
class NavBar extends Component {

  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={navStyle.Navbar}>
        <Navbar.Brand onClick={() => ReactDOM.render(<App />, document.getElementById('root'))}>Bump</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link onClick={() => ReactDOM.render(<Fullpage />, document.getElementById('root'))}>Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    )
  }
}
export default NavBar;
