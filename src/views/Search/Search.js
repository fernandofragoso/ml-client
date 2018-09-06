import React, { Component } from 'react';
import queryString from 'query-string';
import { searchTerm } from '../../services/api';
import { getCurrency } from '../../utils/utils';
import Categories from '../../components/Categories/Categories';
import SearchItem from '../../components/SearchItem/SearchItem';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      categories: [],
      isLoading: true
    };
  }

  componentWillMount() {
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
        {this.state.items.map(item => <SearchItem key={item.id} item={item} />)}
      </div>
    );
  }

  _getParameterAndSearch() {
    const { search } = queryString.parse(this.props.location.search);
    this._search(search);
  }

  async _search(term) {
    const { items, categories } = await searchTerm(term);
    this.setState({
      term,
      items,
      categories,
      isLoading: false
    });
  }
}

export default Search;