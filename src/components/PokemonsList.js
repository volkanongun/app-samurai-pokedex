import React,{useEffect} from 'react';

import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getPokemons} from '../actions/pokemons';

import spinner from '../img/spinner.gif';

import PokemonSmall from './PokemonSmall';

const limit = 50;
let offset = 0;
const maxPaging = 20;

function PokemonsList({getPokemons, pokemons, loading}) {

  useEffect(() => {
    getPokemons(limit,offset)
  }, [getPokemons]);

  console.log(limit, offset)

  const goForwardOnePage = function(){
    console.log("go forward")

    offset += 50

    if(offset >= 1000)
      offset = 1000

    getPokemons(limit,offset)
  }

  const goBackOnePage = function(){
    console.log("go back")

    offset -= 50

    if(offset <= 0)
      offset = 0

    getPokemons(limit,offset)
  }

  return (
    <div className="pokedex">

      <h1>Pokedex</h1>
      
      <nav className="menu">
        <a className="button" onClick={goBackOnePage}>&lt;</a> <Link className="button" to="/mypokemons">My Pokemons</Link> <a onClick={goForwardOnePage} className="button">&gt;</a></nav>

      <div>
        {!loading ? <ul className="pokemons">{pokemons.pokemons.map((poke,key) => <PokemonSmall pokemon={poke} key={key}></PokemonSmall>)}</ul> : <img src={spinner} className="App-logo" alt="logo" />}
      </div>

      <footer className="menu"><a className="button" onClick={goBackOnePage}>&lt;</a> <a onClick={goForwardOnePage} className="button">&gt;</a></footer>
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