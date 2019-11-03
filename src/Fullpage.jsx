import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (

  <ReactFullpage
  autoScrolling={device === 'desktop'}
  fitToSection={device === 'desktop'}
  sectionsColor={['rgba(0,0,0,0)', '#222E70', '#222E70', '#222E70', '#222E70', '#222E70']}
  navigationTooltips={sectionList}
  render={() => (

    <div>


      <div className="section">
        <img src="" />
      </div>
      <div className="section active">
        <img src="" />
      </div>
      <div className="section">
        <img src="" />
      </div>


    </div>


  )}


/>
)
