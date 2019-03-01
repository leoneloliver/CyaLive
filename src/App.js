import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Main from './Main';
import Footer from './Footer';


const Modal = () => {
  return (
    <div id="my-modal" className="popup">
      <div className="row">
        <div className="col-md-8 pr0">
          <iframe width="100%" height="500" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <hr className="hr" />
          <img id="avatar" />
          <h5 id="author"></h5>
        </div>
        <div className="col-md-4 more-info">
          <div id="close">&times;</div>
          <div class="live">Live</div>
          <img id="cover" />
          <h3 id="title"></h3>
          <p id="date"></p>
          <a className="btn-buy" target="_blank" id="buy-ticket">Get Tickets</a>
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
        <Header />
        <Carousel />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
