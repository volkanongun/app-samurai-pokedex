import React from 'react';

import {Link} from "react-router-dom";

import pokeball from '../img/pokeball.png';

import PokemonSmall from './PokemonSmall';

const myPokemon = true;

function MyPokemonsList({loading, history}) {

  const pokemons = JSON.parse(localStorage.getItem("pokemons"));
  // console.log(pokemons);

  return (
    <div className="pokedex">
      <h1>My Pokemons</h1>
      <nav><Link className="button" to="/">Back to Pokedex</Link></nav>
      <div className="align-center">{pokemons.length >= 1 ? <ul className="pokemons">{pokemons.map((poke,key) => <PokemonSmall pokemon={poke} history={history} key={key} myPokemon={myPokemon}></PokemonSmall>)}</ul> : <h4><img src={pokeball} alt="pokeball"/>Add some pokemons to your list</h4>}
      </div>
    </div>
  );
}


export default MyPokemonsList;