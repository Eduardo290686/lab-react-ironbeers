import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './AllBeers.css';
import NavBar from '../navBar/NavBar';
import SearchBar from '../searchBar/SearchBar';

class Home extends Component {

  constructor(props) {
    super(props);
    this.fullList = this.props.beers;
    this.state = {
      showBar: false,
      shownBeers: this.fullList
    }
  }

  showBar = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      showBar: true
    })
  }

  handleSearch = (info) => {
    if (info !== '') {
      let newBeersArr = [];
      newBeersArr = this.fullList.filter((beer) => {
        return beer.name.includes(info);
      })
      this.setState({
        ...this.state,
        shownBeers: newBeersArr
      })
    } else {
      this.setState({
        ...this.state,
        shownBeers: this.fullList
      })
    }
  }

  hideBar = () => {
    this.setState({
      ...this.state,
      showBar: false
    })
  }

  render() {
    return (
      <div className="AllBeers">
        <NavBar></NavBar>
        <div className="button-input-container">
          <button onClick={this.showBar}>Search beer</button>
          {
            this.state.showBar
              ?
              <SearchBar handleSearch={this.handleSearch} hideBar={this.hideBar}></SearchBar>
              :
              null
          }
        </div>
        {
          this.state.shownBeers.map((element, idx) => {
            let id = element._id;
            return (
              <Link
                className="link-container"
                onClick={this.sendBeerToApp}
                to={"/beer/" + id}
                key={idx}
              >
                <div className="beer-container">
                  <div>
                    <div className="image-container">
                      <img src={element.image_url} alt="beer" className="individual-beer-image" />
                    </div>
                  </div>
                  <div className="element-information">
                    <h2 className="individual-beer-title">{element.name}</h2>
                    <h3 className="individual-beer-tagline">{element.tagline}</h3>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    );
  }
}

export default Home;
