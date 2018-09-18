import React, { Component } from 'react';
import List from './List';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Main extends Component {

  handleClick = () => {
    function clickable(){
      var classname = document.getElementsByClassName("item");
      var myFunction = function() {
        var video = this.getAttribute("data-urlvideo");
        var title = this.getAttribute("data-title");
        var cover = this.getAttribute("data-urlcover");
        var avatar = this.getAttribute("data-avatar");
        var author = this.getAttribute("data-author");
        var date = this.getAttribute("data-date");
        document.getElementById("my-modal").getElementsByTagName("iframe")[0].src=video+"?autoplay=1";
        document.getElementById("cover").src=cover;
        document.getElementById("avatar").src=avatar;
        document.getElementById("author").innerText=author;
        document.getElementById("title").innerText=title;
        document.getElementById("date").innerText=date;
        document.getElementById("my-modal").classList.add("show-it");      
      };
      Array.from(classname).forEach(function(element) {
        element.addEventListener("click", myFunction);
      });
      document.getElementById("close").addEventListener("click", closeModal);
      function closeModal(){
        document.getElementById("my-modal").classList.remove("show-it");
        document.getElementById("my-modal").getElementsByTagName("iframe")[0].src="";
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