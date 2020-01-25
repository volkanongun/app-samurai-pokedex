import React from 'react';

import {Link} from "react-router-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import store from './store';

import PokemonsList from "./components/PokemonsList"
import Pokemon from "./components/Pokemon"
import MyPokemonsList from "./components/MyPokemonsList"

import './scss/normalize.css';
import './scss/skeleton.css';
import './scss/App.scss';

import logo from './img/logo.svg';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/" style={{display: "block"}}><img src={logo} className="App-logo" alt="logo" style={{width: "100%"}}/></Link>
          <Switch>
            <Route exact path="/" component={PokemonsList}/>
            <Route path="/pokemon/:id" component={Pokemon}/>
            <Route path="/mypokemons" component={MyPokemonsList}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;