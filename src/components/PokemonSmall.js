import React from 'react';
import {Link} from "react-router-dom";

import capitalize from '../utils';

function PokemonSmall({pokemon}){

	const clickHandler = function(e){
		// console.log(e)
		console.log(pokemon.id)
	}

	return <li className="pokemon">
		<Link to={`/pokemon/${pokemon.id}`}>
			<span>{capitalize(pokemon.name)}</span>
			<img src={pokemon.sprites.front_default}/>
		</Link>
  	</li>
}

export default PokemonSmall