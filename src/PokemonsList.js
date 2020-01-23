import React,{useEffect} from 'react';

import {connect} from 'react-redux';
import {getPokemons} from './actions/pokemons';

import loadingGif from './img/loading.gif';

function PokemonsList({getPokemons, pokemons, loading}) {

  useEffect(() => {
      getPokemons(50);
  }, [getPokemons]);

  return (
    <div >
      Pokemons
      <div>{loading ? <p><img src={loadingGif} className="App-logo" alt="logo" /></p> : pokemons.pokemons.map(poke => <p key={poke.id}>{poke.name}</p>)}</div>
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