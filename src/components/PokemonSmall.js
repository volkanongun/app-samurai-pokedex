import React from 'react';
import {Link} from "react-router-dom";

import deleteIcon from '../img/trash.png';
import capitalize from '../utils';

let tempPokemon = []

function PokemonSmall({pokemon, myPokemon, history}){

	const clickHandler = function(e){

		const pokemons = JSON.parse(localStorage.getItem("pokemons"));
		const filteredPokes = pokemons.filter(p => p.name === pokemon.name);
		const otherPokes = pokemons.filter(p => p.name !== pokemon.name);
		filteredPokes.shift();

		for (let i = 0; i < filteredPokes.length; i++) {
			tempPokemon.push(filteredPokes[i])
		}

		for (let j = 0; j < otherPokes.length; j++) {
			tempPokemon.push(otherPokes[j])
		}

		localStorage.setItem("pokemons", JSON.stringify(tempPokemon));

		history.push('/mypokemons');

		tempPokemon = [];

	}

	return <li className="pokemon">
		<Link to={`/pokemon/${pokemon.id}`}>
			<span>{capitalize(pokemon.name)}</span>
			<img src={pokemon.sprites.front_default} alt={pokemon.name}/>
		</Link>
		{myPokemon ? <span onClick={clickHandler}><img src={deleteIcon} className="delete-icon" alt="logo" /></span> : null}
  	</li>
}

export default PokemonSmall