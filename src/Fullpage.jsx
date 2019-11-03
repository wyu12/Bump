import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import img from './32Weeks.png';


const Fullpage = () => (

  <ReactFullpage
  autoScrolling
  fitToSection
  sectionsColor={['rgba(0,0,0,0)', '#EBC3DB', '#EBC3DB', '#EBC3DB', '#EBC3DB', '#EBC3DB']}

  render={() => (
    <div>
      <div className="section">
        <img src={img} alt="32 weeks" style={{height: "100%", width: "100%"}}/>
      </div>
      <div className="section active">
        <img src={img} alt="32 weeks" style={{height: "100%", width: "100%"}}/>
      </div>
      <div className="section">
        <img src={img} alt="32 weeks" style={{height: "100%", width: "100%"}}/>
      </div>


    </div>

  )}


/>
)
export default Fullpage;
