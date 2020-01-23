import axios from 'axios'

import {POKEMONS_LOADED, POKEMONS_FAILED} from './types';

export const getPokemons = () => async dispatch => {

	try{
		const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
	}catch(err){
		console.log(err)
	}
}