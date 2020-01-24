import React,{useEffect} from 'react';

import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getPokemons} from '../actions/pokemons';

import spinner from '../img/spinner.gif';

import PokemonSmall from './PokemonSmall';

function MyPokemonsList({loading}) {

  const pokemons = JSON.parse(localStorage.getItem("pokemons"));

  return (
    <div className="pokedex">
      <h1>My Pokemons</h1>
      <nav><Link className="button" to="/">Back to Pokedex</Link></nav>
      <div>{<ul className="pokemons">{pokemons.map((poke,key) => <PokemonSmall pokemon={poke} key={key}></PokemonSmall>)}</ul>}
      </div>
    </div>
  );
}


export default MyPokemonsList;