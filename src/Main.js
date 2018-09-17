import React, { Component } from 'react';
import List from './List';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Main extends Component {

  handleClick = () => {
    function clickable(){
      var classname = document.getElementsByClassName("item");
      var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        document.getElementById("my-modal").getElementsByTagName("img")[0].src=attribute;
        document.getElementById("my-modal").classList.add("show-it");      
      };
      Array.from(classname).forEach(function(element) {
        element.addEventListener("click", myFunction);
      });
      document.getElementById("close").addEventListener("click", closeModal);
      function closeModal(){
        document.getElementById("my-modal").classList.remove("show-it");
      }
      // document.getElementById("mobile-menu").addEventListener("click", openMenu);
      // function openMenu(){
      //   document.getElementsByClassName('m-menu')[0].classList.add("open");
      // }
    }
    setTimeout(function(){ clickable(); }, 900);
  }

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.handleClick();
  }
  
  render() {
    return (
      <Router>

        <main className="main" >
           <Route exact path="/" component={List} />
          
        </main>
      </Router>
    );
  }
}

export default Main;