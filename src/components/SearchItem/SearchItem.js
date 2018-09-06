import React, { Component } from 'react';
import { getCurrency } from '../../utils/utils';
import './SearchItem.css';

class SearchItem extends Component {

  render() {
    return (
      <article className='SearchItem'>
        <div className='SearchItem__thumb'>
          <img src={this.props.item.picture} />
        </div>
        <div className='SearchItem__content'>
          <div className='SearchItem__price'>
            {getCurrency(this.props.item.price.currency)} {this.props.item.price.amount}
            {this.props.item.free_shipping && <img src='/images/ic_shipping.png' />}
          </div>
          <div>
            {this.props.item.title}
          </div>
        </div>
        <div className='SearchItem__location'>
          {this.props.item.state}
        </div>
      </article>
    )
  }
}

export default SearchItem;