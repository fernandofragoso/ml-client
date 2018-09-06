import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className='Item'>
        <h3>Item {this.props.location.id}</h3>
      </div>
    );
  }
}

export default Item;