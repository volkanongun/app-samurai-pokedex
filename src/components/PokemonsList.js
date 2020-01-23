import React,{useEffect} from 'react';

import {connect} from 'react-redux';
import {getPokemons} from '../actions/pokemons';

import spinner from '../img/spinner.gif';

import PokemonSmall from './PokemonSmall';

function PokemonsList({getPokemons, pokemons, loading}) {

  useEffect(() => {
      getPokemons(50);
  }, [getPokemons]);

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <div>{!loading ? <ul className="pokemons">
      	{pokemons.pokemons.map(poke => <PokemonSmall pokemon={poke} key={poke.id}></PokemonSmall>)}</ul> : <img src={spinner} className="App-logo" alt="logo" />}
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

export default connect(mapStateToProps, {getPokemons})(PokemonsList);