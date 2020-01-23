import React,{useEffect} from 'react';

import {connect} from 'react-redux';
import {getPokemons} from './actions/pokemons';

import spinner from './img/spinner.gif';

function PokemonsList({getPokemons, pokemons, loading}) {

  useEffect(() => {
      getPokemons(50);
  }, [getPokemons]);

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <div>{!loading ? <ul className="pokemons">
      	{pokemons.pokemons.map(poke => <li key={poke.id} className="pokemon">
      			<span>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</span>
      			<img src={poke.sprites.front_default}/>
      	</li>)}</ul> : <p>
      		<img src={spinner} className="App-logo" alt="logo" />
      	</p>}
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