import React, { Component } from 'react';

class Carousel extends React.Component {
  render() {
    
    return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">

 
      <ul className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ul>
  
  
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="Los Angeles"  className="wide" />
        </div>
        <div className="carousel-item">
          <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="Chicago" className="wide" />
        </div>
        <div className="carousel-item">
          <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="New York" className="wide" />
        </div>
      </div>


  
      <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
  }
}

export default Carousel;
