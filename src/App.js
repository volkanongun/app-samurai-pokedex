import React from 'react';

import { Provider } from 'react-redux';

import logo from './img/logo.svg';
import store from './store';

import PokemonsList from "./PokemonsList"

import './scss/normalize.css';
import './scss/skeleton.css';
import './scss/App.scss';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PokemonsList />
      </Provider>
    </div>
  );
}

export default App;