import React,{useState} from 'react';
import spinner from '../img/spinner.gif';

import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import axios from 'axios'

import Modal from './Modal';
import capitalize from '../utils';

let moveDetail;

function Pokemon({match, pokemons, history}){
	
	const [showModal, setShowModal] = useState(false);

	const poke = pokemons.pokemons.filter(poke => poke.id === parseInt(match.params.id))[0];

	const stats = poke ? poke.stats.map((stat,key) => {
		return <h6 key={key}><strong>{stat.stat.name}</strong> : {stat.base_stat}</h6>
	}) : null;

	const handleClick = async function(url){
		moveDetail = (await axios.get(url)).data;
		setShowModal(true);
	}

	const moves = poke ? poke.moves.map((m,key) => {
		return <li key={key} onClick={() => handleClick(m.move.url)}>{m.move.name}</li>
	}) : null;

	const handleClose = function(){
		setShowModal(false);	
	}

	console.log(poke);

	return <div>
		{ poke ? <div className="container">

			  <div className="row">
			    <div className="twelve columns">
			    	<div className="pokemon-stats">
				
						<div className="image">
							<h4>Pokemon Name : {capitalize(poke.name)}</h4>
							<div className="actions"> 
								<p><Link className="button" to="/">&lt;&lt; Back</Link> <button className="button">Add to my pokemon list</button></p>
							</div>
							<img className="pokemon-image" alt={poke.name} src={poke.sprites.front_default}/>
						</div>

						<div className="stats">
							<h4>Stats</h4>
							<div>{stats ? stats : <img src={spinner} className="App-logo" alt="logo" />}</div>
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
	</div>
}

const mapStateToProps = state =>{

	return {
		pokemons: state.pokemons
	}
}

export default connect(mapStateToProps, {})(Pokemon)