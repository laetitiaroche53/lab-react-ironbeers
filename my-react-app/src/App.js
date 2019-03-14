import React, { Component } from 'react';
import './App.css';
import Homepage from './components/homepage.js'
import Allbeers from './components/allbeers.js'
import { Switch, Route } from 'react-router-dom';
import BeerDetails from './components/beerdetail';
import RandomBeer from './components/randombeer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/allbeers' component={Allbeers}/>
          <Route exact path='/beers/:beerId' component={BeerDetails}/>
          <Route exact path='/random' component={RandomBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
