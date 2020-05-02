import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/">
          <nav className="navigation">
            <img src="../../../images/home.png" alt="beer" className="home-image" />
          </nav>
        </Link>
      </div>
    );
  }
}

export default NavBar;