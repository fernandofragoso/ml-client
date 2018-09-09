import React, { Component } from 'react';
import { getCurrency, getCondition, getSoldQuantity } from '../../utils/utils';
import './DetailsItem.css';

class DetailsItem extends Component {

  render() {
    return (
      <article className='DetailsItem'>
        <div className='DetailsItem__main'>
          <div className='DetailsItem__picture'>
            <img src={this.props.item.picture} alt={this.props.item.title} />
          </div>
          <section className='DetailsItem__info'>
            <div className='DetailsItem__condition'>
              {getCondition(this.props.item.condition)}
              {getSoldQuantity(this.props.item.sold_quantity)}
            </div>
            <div className='DetailsItem__title'>{this.props.item.title}</div>
            <div className='DetailsItem__price'>{getCurrency(this.props.price.currency)} {this.props.price.amount}</div>
            <button className='DetailsItem__button'>Comprar</button>
          </section>
        </div>
        {this.props.item.description &&
          <div className='DetailsItem__description'>
            <h3>Descrição do produto</h3>
            <span>
              {this.props.item.description}
            </span>
          </div>
        }
      </article>
    )
  }
}

export default DetailsItem;