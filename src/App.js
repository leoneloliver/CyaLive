import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Carousel from './Carousel';
import Main from './Main';


const Modal = () => {
  return (
    <div id="my-modal" className="popup">
      <div className="row">
        <div className="col-md-7 pr0">
          <iframe width="100%" height="500" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <hr className="hr" />
          <img id="avatar" />
          <h5 id="author"></h5>
        </div>
        <div className="col-md-5 more-info">
        <div id="close">&times;</div>
          <img id="cover" />
          <h3 id="title"></h3>
          <p id="date"></p>
          <div className="btn-buy">Get Tickets</div>
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
        <footer className="App-footer">
            <p className="made">Made With ❤ by Leonel Oliveira</p>
        </footer>
      </div>
    );
  }
}

export default App;
