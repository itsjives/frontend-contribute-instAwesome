import React, { Component } from 'react';

import NavBar from './components/NavBar'
import InstAwesomeMain from './components/InstAwesomeMain'
import InstAwesomeVideo from './components/InstAwesomeVideo'
import CuriousGraphic from './components/CuriousGraphic'
import InstAwesomeProcess from './components/InstAwesomeProcess'
import InspiredBar from './components/InspiredBar'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='blue-top-bg'></div>
        <NavBar />
        <InstAwesomeProcess />
        <InspiredBar />
        <Testimonials testimonies={[
            {content: 'stuff'},
            {content: 'nextstuff'},
            {content: 'stuffafterthat'},
            {content: ''}
          ]}/>
      <div className='instagradient'></div>
      </div>
    );
  }
}

export default App;
