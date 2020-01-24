import {
	POKEMONS_LOADED,
	POKEMONS_FAILED,
	POKEMON_LOADED,
	POKEMON_FAILED,
 } from '../actions/types';

const initialState = {
	loading: true,
	pokemons: [],
	pokemon: {}
}; 

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch(type){
		case POKEMONS_LOADED:
			return {
				...state,
				pokemons: payload,
				loading: false,
			};
		case POKEMONS_FAILED:
			return {
				...state,
				pokemons : [],
				loading: false
			}
		case POKEMON_LOADED:
			return {
				...state,
				pokemon: payload,
				loading: false,
			};
		case POKEMONS_FAILED:
			return {
				...state,
				pokemon: {},
				loading: false
			}
		default : 
			return state;
	}
}