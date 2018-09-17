import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

class List extends React.Component {
  // using axios
  state = {
    items: []
  }
  componentDidMount() {
    axios.get('https://api.myjson.com/bins/15am2w')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
  render() {
    return (   
      <div className="items container">
        <div className="page-title">
          <h2>UPCOMING</h2>
        </div>
        <Helmet title="UPCOMING" />
        <div className="row">
          {this.state.items.map(item => (
            
            <div className="col-md-6 col-lg-4 item" data-myattribute={ item.video }>
              <div className="card mb-3">
                <img className="card-img-top img-fluid" src={ item.cover } alt={ item.title } />
                <div className="card-block">
                  <div className="titles row">
                    <div className="col-md-3"><div className="square">{ item.date }</div></div>
                    <div className="col-md-9"><p className="card-text">{ item.title }</p></div>
                    
                  </div>
                  <hr />
                  <div className="author">
                    <img src={ item.avatar } />
                    <p className="author-name">{ item.author }</p>
                  </div>

                  
                </div>
              </div>
            </div>
          
          ))}
        </div>
      </div>
    )
  }
  

}
export default List;
