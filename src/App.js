import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Carousel from './Carousel';
import Main from './Main';


const Modal = () => {
  return (
    <div id="my-modal" className="popup">
    <div id="close">&times;</div>
    <p>My Modal</p>
      
      <iframe width="560" height="315" frameBorder="0" allow="autoplay;"></iframe>
      
    </div>
  );
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Carousel />
        <Main />
        
      </div>
    );
  }
}

export default App;
