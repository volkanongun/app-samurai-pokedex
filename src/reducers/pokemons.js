import {
	POKEMONS_LOADED,
	POKEMONS_FAILED,
	POKEMON_LOADED,
	POKEMON_FAILED,
	NEXT_PAGE,
	PREVIOUS_PAGE
 } from '../actions/types';

const initialState = {
	loading: true,
	pokemons: [],
	pokemon: {},
	offset: 50,
	page: 0,
	maxPaging: 20
}; 

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch(type){
		case POKEMONS_LOADED:
			return {
				...state,
				offset: 50, 
				page: 0,
				loading: false,
				pokemons: payload,
			};
		case POKEMONS_FAILED:
			return {
				...state,
				pokemons : [],
				offset: 50, 
				page: 0,
				loading: false
			}
		case POKEMON_LOADED:
			return {
				...state,
				pokemon: payload,
				offset: 50, 
				page: 0,
				loading: false,
			};
		case POKEMONS_FAILED:
			return {
				...state,
				pokemon: {},
				offset: 50, 
				page: 0,
				loading: false
			}
		default : 
			return state;
	}
}