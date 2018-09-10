import React, { Component } from 'react';
import { getCurrency } from '../../utils/utils';
import './SearchItem.css';

class SearchItem extends Component {

  render() {
    return (
      <article className='SearchItem' onClick={this.props.onClick}>
        <div className='SearchItem__thumb'>
          <img src={this.props.picture} alt={this.props.title} />
        </div>
        <div className='SearchItem__content'>
          <div className='SearchItem__price'>
            {getCurrency(this.props.currency)} {this.props.amount}
            {this.props.free_shipping && <img src='/images/ic_shipping.png' alt='Frete Grátis' />}
          </div>
          <div className='SearchItem__item'>
            {this.props.title}
          </div>
        </div>
        <div className='SearchItem__location'>
          {this.props.state}
        </div>
      </article>
    )
  }
}

export default SearchItem;