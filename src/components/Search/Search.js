import React, { Component } from 'react';
import queryString from 'query-string';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      isLoading: true
    };
  }

  componentWillMount() {
    // get query param
    const { search } = queryString.parse(this.props.location.search);
    this.setState({
      term: search
    });
  }

  render() {
    return (
      <div className='Search'>
        <h3>Search: {this.state.term}</h3>
      </div>
    );
  }
}

export default Search;