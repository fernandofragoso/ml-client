import React, { Component } from 'react';
import queryString from 'query-string';
import { searchTerm } from '../../services/api';
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
      this._getParameterAndSearch();
    }
  }

  render() {
    return (
      <div className='Search'>
        <Categories categories={this.state.categories} />
        {this.state.items.map(item => <SearchItem onClick={() => this._handleClick(item.id)} key={item.id} item={item} />)}
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
    this._search(search);
  }

  async _search(term) {
    const { items, categories } = await searchTerm(term);
    document.title = `Mercado Livre | Busca por '${term}'`;
    this.setState({
      term,
      items,
      categories,
      isLoading: false
    });
  }
}

export default Search;