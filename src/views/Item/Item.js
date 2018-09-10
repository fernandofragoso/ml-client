import React, { Component } from 'react';
import DetailsItem from '../../components/DetailsItem/DetailsItem';
import { getItem } from '../../services/api';
import Loading from '../../components/Loading/Loading';
import './Item.css';

class Item extends Component {

  constructor(props) {
    super(props);
    this.state ={
      item: {},
      price: {},
      categories: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this._getParameterAndSearch();
  }

  render() {
    return (
      <div className='Item'>
        {!this.state.isLoading &&
          <DetailsItem {...this.state.item} {...this.state.price} />
        }
        {this.state.isLoading &&
          <Loading />
        }
      </div>
    );
  }

  _getParameterAndSearch() {
    const id = this.props.match.params.id;
    if (id) {
      this._getItem(id);
    } else {
      this._goToHome();
    } 
  }

  _goToHome() {
    this.props.history.push('/');
  }

  async _getItem(id) {
    try {
      const { item } = await getItem(id);
      document.title = `Mercado Livre | ${item.title}`;
      this.setState({
        item,
        price: item.price,
        isLoading: false
      });
    } catch(err) {
      this._goToHome();
    }
  }
}

export default Item;