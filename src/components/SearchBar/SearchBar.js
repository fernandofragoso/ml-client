import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <section className='SearchBar'>
        <div className='SearchBar__logo'>
          <img onClick={() => this._goHome()} src='/images/logo.png' alt='Mercado Livre'/>
        </div>
        <div className='SearchBar__search'>
          <input 
            type='text' 
            placeholder='Buscar produtos, marcas e muito mais...' 
            value={this.state.value}
            onChange={(event) => this._handleChange(event)}
            onKeyPress={(event) => (event.key === 'Enter') ? this._handleSearch() : null}/>
          <button onClick={() => this._handleSearch()} disabled={!this.state.value}>
            <img src='/images/ic_search.png' alt='Buscar'/>
          </button>
        </div>
      </section>
    );
  }

  _handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  _handleSearch() {
    if (this.props.history) {
      this.props.history.push(`/items?search=${this.state.value}`);
    }
  }

  _goHome() {
    this.setState({
      value: ''
    });
    if (this.props.history) {
      this.props.history.push(`/`);
    }
  }
}

export default SearchBar;