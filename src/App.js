import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Item from './components/Item/Item';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App__header'>
            <Route path='/' component={SearchBar}/>
          </header>
          <div className='App__content'>
            <Route exact path='/' component={Home}/>
            <Route exact path='/items' component={Search}/>
            <Route path='/items/:id' component={Item}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
