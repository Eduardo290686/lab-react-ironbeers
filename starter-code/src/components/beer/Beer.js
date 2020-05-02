import React, { Component } from 'react';
import NavBar from '../navBar/NavBar';
import './Beer.css'

class Beer extends Component {

  constructor(props) {
    super(props);
    this.selectedBeer = [];
    this.state = {
      beers: this.props.beers,
      beerId: this.props.beerId
    }
  }

  render() {
    return (
      <div className="Beer">
        <NavBar></NavBar>
        {
          this.state.beers.map((beer, idx) => {
            if (beer._id === this.state.beerId) {
              return (
                <div key={idx} className="selected-beer-container">
                  <div className="img-container">
                    <img src={beer.image_url} alt="beer" className="beer-image" />
                  </div>
                  <div className="selected-beer-information">
                    <h2 className="beer-title">{beer.name}</h2>
                    <h3 className="beer-tagline">{beer.tagline}</h3>
                    <p className="beer-description">{beer.description}</p>
                  </div>
                </div>
              )
            } else {
              return null;
            }
          })
        }
      </div>
    );
  }
}

export default Beer;
