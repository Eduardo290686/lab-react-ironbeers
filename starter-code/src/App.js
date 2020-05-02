import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AllBeers from "./components/allBeers/AllBeers";
import Beer from "./components/beer/Beer";
import CreateBeer from "./components/createBeer/CreateBeer";
import './App.css';
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    }
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        this.setState({
          ...this.state,
          beers: response.data
        })
      })
  }

  selectRandomBeer = () => {
    let beers = this.state.beers;
    let randomNum = Math.floor(Math.random() * beers.length -1);
    this.randomBeer = beers[randomNum];
    return this.randomBeer._id;
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home selectRandomBeer={this.selectRandomBeer}></Home>
              );
            }}
          />
          <Route
            exact
            path="/allBeers"
            render={() => {
              return (
                <AllBeers
                  beers={this.state.beers}
                >
                </AllBeers>
              );
            }}
          />
          <Route
            exact
            path={"/beer/:id"}
            render={(props) => {
              let id = props.match.params.id;
              return (
                <Beer
                  beers={this.state.beers}
                  beerId={id}
                >
                </Beer>
              );
            }}
          />
          <Route
            exact
            path="/randomBeer"
            render={() => {
              let id = this.selectRandomBeer();                      
              return ( 
                <Beer
                  beers={this.state.beers}
                  beerId={id}
                >
                </Beer>
              );
            }}
          />
          <Route
            exact
            path="/createBeer"
            render={() => {                     
              return ( 
                <CreateBeer></CreateBeer>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
