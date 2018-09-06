import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className='Item'>
        <h3>Item {this.props.match.params.id}</h3>
      </div>
    );
  }
}

export default Item;