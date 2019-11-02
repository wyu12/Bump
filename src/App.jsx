import React, { Component } from 'react';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <router>
      <NavBar></NavBar>
      
      <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" /> 
              
              <h1>
              Comprehensive Reproductive Health For All
              </h1>
             
              {/* <br></br> */}
              <h5>
               Bump is a free, educational service, here to help 
               you make more educated decisions about your pregnancy
               </h5>
             
             <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-light" size="lg">Sign in / Register</Button>
      
              
              </a>
            </header>
          </div>
      
      </router>
      )
    }
  }
  export default App;
