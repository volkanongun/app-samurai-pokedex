import React,{useEffect} from 'react';

import {connect} from 'react-redux';
import {getPokemons} from './actions/pokemons';

import spinner from './img/spinner.gif';

function PokemonsList({getPokemons, pokemons, loading}) {

  useEffect(() => {
      getPokemons(50);
  }, [getPokemons]);

  return (
    <div >
      Pokemons
      <div>{!loading ? <div>
      	{pokemons.pokemons.map(poke => <ul key={poke.id}>
      		<li>
      			<span>{poke.name}</span>
      			<img src={poke.sprites.front_default}/>
      		</li>
      	</ul>)}</div> : <p>
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