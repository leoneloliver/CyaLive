import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

// const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
const cors_api_url = 'https://test.cors.workers.dev/?';
// https://extendsclass.com/json-storage.html#adefdbd
class List extends React.Component {
  // using axios
  state = {
    items: []
  }
  componentDidMount() {
    axios.get(`${cors_api_url}https://extendsclass.com/api/json-storage/bin/adefdbd?v=24`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
        // console.log(this.state.items)
      })   
  }
  render() {
    return (   
      <div className="items container">
        <div className="page-title">
          <h2>UPCOMING</h2>
        </div>
        <Helmet title="Cya.Live - Clone" />
        <div className="row">
          {this.state.items.map(item => (
            <div className="col-md-6 col-lg-4 item" data-urlvideo={ item.video }  data-urlcover={ item.cover } data-title={ item.title } data-avatar={ item.avatar } data-author={ item.author } data-date={ item.date }>
              <div className="card mb-3">
	    	        <div class="live">Live</div>
                  <img className="card-img-top img-fluid" src={ item.cover } alt={ item.title } />
                  <div className="card-block">
                    <div className="titles row">
                      <div className="col-md-3 col-xs-3 col-sm-3 col-3"><div className="square">{ item.date }</div></div>
                      <div className="col-md-9 col-xs-9 col-sm-9 col-9"><p className="card-text">{ item.title }</p></div>               
                    </div>
                    <hr />
                    <div className="author">
                      <img src={ item.avatar } />
                      <p className="author-name">{ item.author }</p>
                    </div>               
                  </div>
                  <div className="hover">
                    <div className="container-hover">
                      <div className="rounded">➤</div>
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