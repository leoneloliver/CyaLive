import React, { Component } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

class List extends React.Component {
  // using axios
  state = {
    items: []
  }
  componentDidMount() {
    axios.get('https://api.myjson.com/bins/73bm4')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }
  render() {
    return (   
      <div className="items container">
        <div className="page-title">
          <h2>Jackets</h2>
        </div>
        <Helmet title="Jackets - Products" />
        <div className="row">
          {this.state.items.map(item => (
            
            <div className="col-md-6 col-lg-4 item" data-myattribute={ item.img }>
              <div className="card mb-3">
                <img className="card-img-top img-fluid" src={ item.img } alt={ item.name } />
                <div className="card-block">
                  <div className="titles row">
                    <div className="col-md-3"><div className="square">DEC 09</div></div>
                    <div className="col-md-9"><p className="card-text">{ item.name }</p></div>
                    
                  </div>
                  <hr />
                  <div className="author">
                    <img src="https://yt3.ggpht.com/-zdvYBuvxhBQ/AAAAAAAAAAI/AAAAAAAAAAA/XVyRJlSh0lA/s48-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                    <p className="author-name">Leonel Oliver</p>
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