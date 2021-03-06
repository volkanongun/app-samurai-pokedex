import axios from 'axios'

import {
	POKEMONS_LOADED, 
	POKEMONS_FAILED, 
	POKEMON_LOADED, 
	POKEMON_FAILED
} from './types';


export const getPokemons = (limit, offset) => async dispatch => {

	try{
		const pokemons = [];

		const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

		// console.log(URL);
		
		const res = await axios.get(URL)

		// console.log(res.data.results, " ∆∆∆∆∆");

		for (var i = 0; i < res.data.results.length; i++) {
			// console.log(res.data.results[i].name)
			// console.log(res.data.results[i].url)

			const pokeres = await axios.get(res.data.results[i].url)
			// console.log(pokeres.data);

			pokemons.push(pokeres.data)
 
			if(i === res.data.results.length-1){
				dispatch({
					type: POKEMONS_LOADED,
					payload : pokemons
				})
			}
		}

	}catch(err){
		console.log(err)

		dispatch({
			type: POKEMONS_FAILED,
			payload : err
		})
	}
}

export const getPokemon = (id) => async dispatch => {

	try{
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

		dispatch({
			type: POKEMON_LOADED,
			payload : res.data
		})

	}catch(err){
		console.log(err)

		dispatch({
			type: POKEMON_FAILED,
			payload : err
		})
	}
}


