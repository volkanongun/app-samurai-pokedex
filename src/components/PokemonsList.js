import React,{useEffect} from 'react';

import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getPokemons,emptyPokemonsList} from '../actions/pokemons';

import spinner from '../img/spinner.gif';

import PokemonSmall from './PokemonSmall';

function PokemonsList({getPokemons, pokemons, loading, emptyPokemonsList}) {

  useEffect(() => {
      emptyPokemonsList(getPokemons(50))
  }, [getPokemons]);

  return (
    <div className="pokedex">

      <h1>Pokedex</h1>
      
      <nav className="menu"><Link className="button" to="/mypokemons">My Pokemons</Link></nav>

      <div>{!loading ? <ul className="pokemons">
      	{pokemons.pokemons.map((poke,key) => <PokemonSmall pokemon={poke} key={key}></PokemonSmall>)}</ul> : <img src={spinner} className="App-logo" alt="logo" />}
      </div>
    </div>
  );
}

const mapStateToProps = state => {

  return {
    pokemons : state.pokemons,
    loading : state.loading
  }

}

export default connect(mapStateToProps, {getPokemons,emptyPokemonsList})(PokemonsList);