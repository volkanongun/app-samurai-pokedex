import React,{useEffect} from 'react';

import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getPokemons} from '../actions/pokemons';

import spinner from '../img/spinner.gif';

import PokemonSmall from './PokemonSmall';

const limit = 50;
let offset = 0;

function PokemonsList({getPokemons, pokemons, loading}) {

  useEffect(() => {
    getPokemons(limit,offset)
  }, [getPokemons]);

  // console.log(limit, offset)

  const goForwardOnePage = function(){
    // console.log("go forward")

    offset += 50

    if(offset >= 1000)
      offset = 1000

    getPokemons(limit,offset)
  }

  const goBackOnePage = function(){
    // console.log("go back")

    offset -= 50

    if(offset <= 0)
      offset = 0

    getPokemons(limit,offset)
  }

  console.log(loading)

  return (
    <div className="pokedex">

      <h1>Pokedex</h1>
      
      <nav className="menu">
        {offset !== 0 ? <button className="button" onClick={goBackOnePage}>&lt; Previous Page</button>: null} <Link className="button" to="/mypokemons">My Pokemons</Link> <button onClick={goForwardOnePage} className="button">&gt; Next Page</button>
      </nav>

      {loading ? <p className="align-center"><img src={spinner} className="App-logo" alt="logo" /></p> : null}

      <div>
        {<ul className="pokemons">{pokemons.pokemons.map((poke,key) => <PokemonSmall pokemon={poke} key={key}></PokemonSmall>)}</ul>}
      </div>

      <footer className="menu">{offset !== 0 ? <button className="button" onClick={goBackOnePage}>&lt; Previous Page</button>: null} <button onClick={goForwardOnePage} className="button">&gt; Next Page</button></footer>
    </div>
  );
}

const mapStateToProps = state => {

  console.log(state)

  return {
    pokemons : state.pokemons,
    loading : state.pokemons.loading
  }

}

export default connect(mapStateToProps, {getPokemons})(PokemonsList);