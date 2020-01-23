import React,{useEffect} from 'react';

import {connect} from 'react-redux';
import {getPokemons} from './actions/pokemons';

function PokemonsList({getPokemons}) {

  useEffect(() => {
      getPokemons();
  }, []);

  return (
    <div >
      Pokemons
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