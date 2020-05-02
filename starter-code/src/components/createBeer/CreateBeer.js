import React, { Component } from 'react';
import './CreateBeer.css';
import NavBar from '../navBar/NavBar'

class CreateBeer extends Component {
  render() {
    return (
      <div className='CreateBeer'>
        <NavBar></NavBar>
        <div className="form-container">
          <form method="POST" action="https://ih-beers-api2.herokuapp.com/beers/new">
            <label for="name">Name:</label>
            <input type="text" name="name" />
            <label for="tagline">Tag line:</label>
            <input type="text" name="tagline" />
            <label for="description">Description:</label>
            <textarea type="text" name="description" />
            <label for="first_brewed">First brewed:</label>
            <input type="text" name="first_brewed" />
            <label for="brewers_tips">Brewers tips:</label>
            <input type="text" name="brewers_tips" />
            <label for="attenuation_level">Attenuation level:</label>
            <input type="number" name="attenuation_level" />
            <label for="contributed_by">Contributed by:</label>
            <input type="text" name="contributed_by" />
            <div className="submit-button-container">
              <input type="submit" value="Submit" id="submit-button"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateBeer;
