import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Carousel from './Carousel';
import Main from './Main';


const Modal = () => {
  return (
    <div id="my-modal" className="popup">
      <div id="close">&times;</div>
      <p>Details</p>
      <div className="row">
        <div className="col-md-7">
          <iframe width="100%" height="500px" frameBorder="0" allow="autoplay;"></iframe>
        </div>
        <div className="col-md-5">
          More Information
        </div>
      </div>
     
      
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
