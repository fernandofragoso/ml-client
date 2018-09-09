import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  componentDidMount() {
    document.title = 'Mercado Livre';
  }

  render() {
    return (
      <div className='Home'>
        <h3>Home</h3>
      </div>
    );
  }
}

export default Home;