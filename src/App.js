import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage'
import { Route, Switch } from 'react-router-dom';
import AddBeer from './components/AddBeer'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import BeerDetails from './components/BeerDetails'


function App() {
  return (
    <div className="App">

      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/beers" component={ListBeers} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={AddBeer} />
      <Route exact path="/beers/:id" component={BeerDetails} />
    </Switch>
    </div>
  );
}

export default App;
