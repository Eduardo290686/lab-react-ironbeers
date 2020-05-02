import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './AllBeers.css';
import NavBar from '../navBar/NavBar'

class Home extends Component {

  render() {
    return (
      <div className="AllBeers">
        <NavBar></NavBar>
        {
          this.props.beers.map((element, idx) => {
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
