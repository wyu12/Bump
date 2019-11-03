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
      <div className="App bg">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" /> 
              <h1>
              Bump: Your Personal Guide to Pregnancy
              </h1>
               <h3 className="sub">
                We provide a free, educational service to help you understand your pregnancy and make well-informed decisions.
               </h3>
             
             <a
                className="App-link"
                onClick={() => ReactDOM.render(<SignInForm />, document.getElementById('root'))}
                target="_blank"
                rel="noopener noreferrer">
                <Button  size="lg" style={{display: 'flex', border:'none', backgroundColor: '#657ea2'}}>Log in</Button>
            </a>
                <div></div>
                <a
                onClick={() => ReactDOM.render(<SignUpForm />, document.getElementById('root'))}
                          className="App-link"
                          target="_blank"
                          rel="noopener noreferrer">
                <Button variant="secondary" size="sm" style={{display: 'flex', border:'none', backgroundColor: '#acbed8'}} >Click here to register</Button>
                      </a>

            </header>
          </div>
      </router>
      )
    }
  }
  export default App;
