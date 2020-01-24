import React,{useState} from 'react';
import spinner from '../img/spinner.gif';

import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import axios from 'axios'

import Modal from './Modal';
import AbilityModal from './AbilityModal';
import capitalize from '../utils';

let moveDetail;
let abilityDetail;

function Pokemon({match, pokemons, history}){
	
	const [showModal, setShowModal] = useState(false);
	const [showAbilityModal, setShowAbilityModal] = useState(false);

	const poke = pokemons.pokemons.filter(poke => poke.id === parseInt(match.params.id))[0];

	const handleClick = async function(url){
		console.log(url)
		moveDetail = (await axios.get(url)).data;
		setShowModal(true);
	}

	const handleAbilityClick = async function(url){
		abilityDetail = (await axios.get(url)).data;
		setShowAbilityModal(true);
	}

	const stats = poke ? poke.stats.map((stat,key) => {
		return <h6 key={key}><strong>{stat.stat.name}</strong> : {stat.base_stat}</h6>
	}) : null;

	const abilities = poke ? poke.abilities.map((a,key) => {
		return <li key={key} onClick={() => handleAbilityClick(a.ability.url)}>{a.ability.name}</li>
	}) : null;

	const types = poke ? poke.types.map((t,key) => {
		return <li key={key}>
			<span><strong>Slot: </strong> {t.slot}</span>, <span><strong>Type: </strong> {t.type.name}</span>
		</li>
	}) : null;

	const moves = poke ? poke.moves.map((m,key) => {
		return <li key={key} onClick={() => handleClick(m.move.url)}>{m.move.name}</li>
	}) : null;

	const handleClose = function(){
		setShowModal(false);	
	}

	const handleAbilityClose = function(){
		setShowAbilityModal(false);	
	}

	console.log(poke);

	return <div>
		{ poke ? <div className="container">

			  <div className="row">
			    <div className="twelve columns">
			    	<div className="pokemon-stats">
						<div className="image">
							<h4><strong>Pokemon</strong> : {capitalize(poke.name)}</h4>
							<div className="actions"> 
								<p><Link className="button" to="/">&lt;&lt; Back</Link> <button className="button">Add to my pokemon list</button></p>
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
								      <td><img className="pokemon-image" alt={poke.name} src={poke.sprites.front_default}/></td>
								      <td><img className="pokemon-image" alt={poke.name} src={poke.sprites.back_default}/></td>
								    </tr>
								  </tbody>
								</table>

								{poke.sprites.front_female ? <table className="u-full-width">
								  <thead>
								    <tr>
								      <th>Front(Female)</th>
								      <th>Back(Female)</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <td><img className="pokemon-image" alt={poke.name} src={poke.sprites.front_female}/></td>
								      <td><img className="pokemon-image" alt={poke.name} src={poke.sprites.back_female}/></td>
								    </tr>
								  </tbody>
								</table> : null}
							</div>
						</div>

						<div className="stats">
							<h4>Stats</h4>
							<div>{stats ? stats : <img src={spinner} className="App-logo" alt="logo" />}</div>
						</div>

						<div className="abilities">
							<h4>Abilities</h4>
							<div>{abilities}</div>
						</div>

						<div className="types">
							<h4>Type</h4>
							<div>{types}</div>
						</div>

						<div className="moves">
							<h4>Moves</h4>
							<ul>{moves}</ul>
						</div>
			    	</div>
			  </div>

			</div>
			</div> : <div className="spinner"><img src={spinner} className="App-logo" alt="logo" /></div> }

			<Modal show={showModal} moveDetail={moveDetail} handleClose={handleClose}></Modal>
			<AbilityModal show={showAbilityModal} abilityDetail={abilityDetail} handleClose={handleAbilityClose}></AbilityModal>
	</div>
}

const mapStateToProps = state =>{

	return {
		pokemons: state.pokemons
	}
}

export default connect(mapStateToProps, {})(Pokemon)