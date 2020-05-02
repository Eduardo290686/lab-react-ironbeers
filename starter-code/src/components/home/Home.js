import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Link className='link' to="/allBeers">
          <div className="home-image-container">
            <img src='../../../images/beers.png' alt='beers' />
          </div>
          <div className='info-container'>
            <h1 className='title'>All beers</h1>
            <p className='paragraph'>
              You can see a full list with all of our beers. There are diferent types of
              beers. Here, you will see all of them with its information and the image. Click
              here and enjoy it.
          </p>
          </div>
        </Link>
        <Link className='link' to="/randomBeer">
          <div className="home-image-container">
            <img src='../../../images/random-beer.png' alt='beers' />
          </div>
          <div className='info-container'>
            <h1 className='title'>Random beer</h1>
            <p className='paragraph'>
              You know that we have diferent beers. Well, here, you can get a random beer
              from the list. Try and get your random beer. There are lots of beers you can
              display here. Best of luck!
          </p>
          </div>
        </Link>
        <Link className='link' to="/createBeer">
          <div className="home-image-container">
            <img src='../../../images/new-beer.png' alt='beers' />
          </div>
          <div className='info-container'>
            <h1 className='title'>New beer</h1>
            <p className='paragraph'>
              Do you want to add a new beer to the list? We are sure that you have a beer that
              you like which is not included in our list. You can added and then, other users
              will be able to see it. It you chance to be part of our project. Welcome to
              IronBeers.
          </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
