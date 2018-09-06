import React, { Component } from 'react';
import queryString from 'query-string';
import './Search.css';

class Search extends Component {

  componentWillMount() {
    // get query param
    const { search } = queryString.parse(this.props.location.search);
    
  }

  render() {
    return (
      <div className='Search'>
        <h3>Search</h3>
        <span>{this.props.test}</span>
      </div>
    );
  }
}

export default Search;