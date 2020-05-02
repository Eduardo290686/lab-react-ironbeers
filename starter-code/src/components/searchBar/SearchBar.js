import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {

  handleBeerName = (event) => {
    event.preventDefault();
    if (event.target.value !== '') {
      let beerName = event.target.value;
      let upperBeerName = beerName[0].toUpperCase() + beerName.slice(1);
      this.props.handleSearch(upperBeerName);
    } else {
      this.props.handleSearch(event.target.value);
    }
  }

  hideSearchBar = (event) => {
    event.preventDefault();
    this.props.hideBar();
  }

  render() {
    return (
      <div className="SearchBar">
        <label>Search</label>
        <input onChange={this.handleBeerName}></input>
        <button onClick={this.hideSearchBar}>Hide search bar</button>
      </div>
    );
  }
}

export default SearchBar;