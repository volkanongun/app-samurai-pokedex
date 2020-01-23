import React from 'react';
import {Link} from "react-router-dom";

function PokemonSmall({pokemon}){

	const clickHandler = function(e){
		// console.log(e)
		console.log(pokemon.id)
	}

	return <li key={pokemon.id} className="pokemon">
		<Link to={`/pokemon/${pokemon.id}`}>
			<span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
			<img src={pokemon.sprites.front_default}/>
		</Link>
  	</li>
}

export default PokemonSmall