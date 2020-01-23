import axios from 'axios'

import {POKEMONS_LOADED, POKEMONS_FAILED} from './types';

export const getPokemons = () => async dispatch => {

	try{
		const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')

		console.log(res.data.results);

		dispatch({
			type: POKEMONS_LOADED,
			payload : res.data.results
		})

	}catch(err){
		console.log(err)

		dispatch({
			type: POKEMONS_FAILED,
			payload : err
		})
	}
}