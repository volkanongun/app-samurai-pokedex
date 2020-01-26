import React,{useState,useEffect} from 'react';
import spinner from '../img/spinner.gif';
import pokeball from '../img/pokeball.png';

import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {getPokemon} from '../actions/pokemons';
import axios from 'axios'

import Modal from './Modal';
import AbilityModal from './AbilityModal';
import SuccessModal from './SuccessModal';

let moveDetail;
let abilityDetail;
let successDetail;

let pokemonList = [];

function Pokemon({match, pokemons, getPokemon, pokemon, loading}){

	console.log(match.params.id);

	useEffect(() => {
    	getPokemon(match.params.id)
  	}, [getPokemon, match.params.id]);
	
	const [showModal, setShowModal] = useState(false);
	const [showAbilityModal, setShowAbilityModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const poke = pokemons.pokemons.filter(p => p.id === parseInt(match.params.id))[0];

	const handleClick = async function(url){
		moveDetail = (await axios.get(url)).data;
		setShowModal(true);
	}

	const handleAbilityClick = async function(url){
		abilityDetail = (await axios.get(url)).data;
		setShowAbilityModal(true);
	}

	const handleClose = function(){
		setShowModal(false);	
	}

	const handleAbilityClose = function(){
		setShowAbilityModal(false);	
	}

	const handleSuccessClose = function(){
		setShowSuccessModal(false);	
	}

	const addPokemon = function(){

		// console.log(pokemonList)

		if(!localStorage.getItem("pokemons")){
			pokemonList.push(pokemon)
			localStorage.setItem("pokemons", JSON.stringify(pokemonList));
			setShowSuccessModal(true);
			successDetail = pokemon;
			return;
		}

		if(localStorage.getItem("pokemons")){
			let localStoragePokes = JSON.parse(localStorage.getItem("pokemons"));
			localStoragePokes.push(pokemon);
			localStorage.setItem("pokemons", JSON.stringify(localStoragePokes));
			successDetail = pokemon;
		}

		setShowSuccessModal(true);

	}

	// console.log(poke);

	return <div>
			<div className="container">

				{pokemon && !loading ? <div className="row">
					    <div className="twelve columns">
					    	<div className="pokemon-stats">
								<div className="image">
									<h4><strong>{pokemon.name}</strong></h4>
									<div className="actions"> 
										<p><Link className="button" to="/">&lt;&lt; Back</Link> <button className="button" onClick={addPokemon}><img src={pokeball} alt="pokeball" style={{width: "20px"}}/> Add to my pokemon list</button> <Link className="button" to="/mypokemons">My pokemons</Link></p>
									</div>
									
									<div>
										<table className="u-full-width">
										  <thead>
										    <tr>
										      <th>Front(Male)</th>
										      <th>Back(Male)</th>
										    </tr>
										  </thead>
										  <tbody>
										    <tr>
										      <td><img className="pokemon-image" alt={pokemon.name} src={pokemon.sprites ? pokemon.sprites.front_default : null}/></td>
										      <td><img className="pokemon-image" alt={pokemon.name} src={pokemon.sprites ? pokemon.sprites.back_default : null}/></td>
										    </tr>
										  </tbody>
										</table>

										{ pokemon.sprites.front_female ? <table className="u-full-width">
																				  <thead>
																				    <tr>
																				      <th>Front(Female)</th>
																				      <th>Back(Female)</th>
																				    </tr>
																				  </thead>
																				  <tbody>
																				    <tr>
																				      <td><img className="pokemon-image" alt={pokemon.name} src={pokemon.sprites ? pokemon.sprites.front_female : null}/></td>
																				      <td><img className="pokemon-image" alt={pokemon.name} src={pokemon.sprites ? pokemon.sprites.back_female : null}/></td>
																				    </tr>
																				  </tbody>
																				</table> : null}
									</div>
								</div>

								<div className="stats">
									<h4><strong>Stats</strong></h4>
									<div>{pokemon.stats ? pokemon.stats.map((stat,key) => {
										return <h6 key={key}><strong>{stat.stat.name}</strong> : {stat.base_stat}</h6>
									}) : null}</div>
								</div>

								<div className="abilities">
									<h4><strong>Abilities</strong></h4>
									<div>{pokemon.abilities ? pokemon.abilities.map((a,key) => {
										return <li key={key} onClick={() => handleAbilityClick(a.ability.url)}>{a.ability.name}</li>
									}) : null}</div>
								</div>

								<div className="types">
									<h4><strong>Type</strong></h4>
									<div>{pokemon.types ? pokemon.types.map((t,key) => {
										return <li key={key}>
											<span><strong>Slot: </strong> {t.slot}</span>, <span><strong>Type: </strong> {t.type.name}</span>
										</li>
									}) : null}</div>
								</div>

								<div className="moves">
									<h4><strong>Moves</strong></h4>
									<ul>{pokemon.moves ? pokemon.moves.map((m,key) => {
										return <li key={key} onClick={() => handleClick(m.move.url)}>{key+1} - {m.move.name}</li>
									}) : null}</ul>
								</div>
					    	</div>
					  </div>
					</div> : <p className="align-center"><img src={spinner} className="App-logo" alt="logo" /></p>}

			<Modal show={showModal} moveDetail={moveDetail} handleClose={handleClose}></Modal>
			<AbilityModal show={showAbilityModal} abilityDetail={abilityDetail} handleClose={handleAbilityClose}></AbilityModal>
			<SuccessModal show={showSuccessModal} successDetail={successDetail} handleClose={handleSuccessClose}></SuccessModal>
		</div>
	</div>
}

const mapStateToProps = state => {

	return {
		pokemons: state.pokemons,
		pokemon: state.pokemons.pokemon,
		loading: state.pokemons.loading
	}
}

export default connect(mapStateToProps, {getPokemon})(Pokemon)