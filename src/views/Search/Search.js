import React, { Component } from 'react';
import queryString from 'query-string';
import { searchTerm } from '../../services/api';
import Loading from '../../components/Loading/Loading';
import Categories from '../../components/Categories/Categories';
import SearchItem from '../../components/SearchItem/SearchItem';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state ={
      term: '',
      items: [],
      categories: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this._getParameterAndSearch();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.setState({
        items: [],
        categories: [],
        isLoading: true
      });
      this._getParameterAndSearch();
    }
  }

  render() {
    return (
      <div className='Search'>
        <Categories categories={this.state.categories} />
        {this.state.items.map(item => <SearchItem onClick={() => this._handleClick(item.id)} key={item.id} {...item} {...item.price} />)}
        {this.state.isLoading && 
          <Loading />
        }
      </div>
    );
  }

  _handleClick(id) {
    if (this.props.history) {
      this.props.history.push(`/items/${id}`);
    }
  }

  _getParameterAndSearch() {
    const { search } = queryString.parse(this.props.location.search);
    if (search) {
      this._search(search);
    } else {
      this._goToHome();
    }
  }

  _goToHome() {
    this.props.history.push('/');
  }

  async _search(term) {
    try {
      const { items, categories } = await searchTerm(term);
      document.title = `Mercado Livre | Busca por '${term}'`;
      this.setState({
        term,
        items,
        categories,
        isLoading: false
      });
    } catch(err) {
      this._toToHome();
    }
  }
}

export default Search;