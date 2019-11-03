import React, { Component } from 'react';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import SignUpForm from './SignUpForm.jsx';
import SignInForm from './SignInForm.jsx';
import logo from './biglogo2.png';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return (
      <router>
      <NavBar></NavBar>

      <div className="App bg">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" /> 
              
              <h1>
              Comprehensive Reproductive Health For All
              </h1>
             
              {/* <br></br> */}
              <h5>
               Bump is a free, educational service, here to help you make more educated decisions about your pregnancy
               </h5>
             
             <a
                className="App-link"
                onClick={() => ReactDOM.render(<SignInForm />, document.getElementById('root'))}
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="primary" size="lg" style={{display: 'flex'}}>Sign In</Button>
            </a>
                <div></div>
                <a
                onClick={() => ReactDOM.render(<SignUpForm />, document.getElementById('root'))}
                          className="App-link"
                          target="_blank"
                          rel="noopener noreferrer">
                <Button variant="secondary" size="sm" style={{display: 'flex'}} >Click here to register</Button>
                      </a>

            </header>
          </div>
      </router>
      )
    }
  }
  export default App;
