import {
	POKEMONS_LOADED,
	POKEMONS_FAILED,
 } from '../actions/types';

const initialState = {
	loading: true,
	pokemons: []
}; 

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch(type){
		case POKEMONS_LOADED:
			return {
				...state,
				pokemons: payload,
				loading: false
			};
		case POKEMONS_FAILED:
			return {
				...state,
				pokemons : [],
				loading: false
			}
		default : 
			return state;
	}
}