import React, { Component } from 'react';
import { getCurrency, getCondition, getSoldQuantity, getDecimals } from '../../utils/utils';
import './DetailsItem.css';

class DetailsItem extends Component {

  render() {
    return (
      <article className='DetailsItem'>
        <div className='DetailsItem__main'>
          <div className='DetailsItem__picture'>
            <img src={this.props.picture} alt={this.props.title} />
          </div>
          <section className='DetailsItem__info'>
            <div className='DetailsItem__condition'>
              {getCondition(this.props.condition)}
              {getSoldQuantity(this.props.sold_quantity)}
            </div>
            <div className='DetailsItem__title'>{this.props.title}</div>
            <div className='DetailsItem__price'>
              {getCurrency(this.props.currency)}
              {this.props.amount}
              <span className='DetailsItem__decimals'>{getDecimals(this.props.decimals)}</span>
            </div>
            <button className='DetailsItem__button'>Comprar</button>
          </section>
        </div>
        {this.props.description &&
          <div className='DetailsItem__description'>
            <h3>Descrição do produto</h3>
            <span>
              {this.props.description}
            </span>
          </div>
        }
      </article>
    )
  }
}

export default DetailsItem;