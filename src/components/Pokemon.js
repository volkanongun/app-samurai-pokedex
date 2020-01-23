import React from 'react';
import spinner from '../img/spinner.gif';

import {connect} from 'react-redux';

import capitalize from '../utils';

function Pokemon({match, pokemons}){
	
	const poke = pokemons.pokemons.filter(poke => poke.id === parseInt(match.params.id))[0];

	const stats = poke.stats.map(stat => {
		return <h4><strong>{stat.stat.name}</strong> : {stat.base_stat}</h4>
	})

	console.log(poke);

	return <div>
		{ poke ? <div class="container">

			  <div class="row">
			    <div class="twelve columns">
			    	<div className="pokemon-stats">
				
						<div className="image">
							<h4>Pokemon Name : {capitalize(poke.name)}</h4>
							<h4>ID : {poke.id}</h4>
							<img className="pokemon-image" src={poke.sprites.front_default}/>
						</div>

						<div className="actions"> 
							<h4>Actions : </h4>
							<p><button className="button">Add to my pokemon list</button></p>
						</div>

						<div className="stats">
							<div>{stats ? stats : <img src={spinner} className="App-logo" alt="logo" />}</div>
						</div>
			    	</div>
			  </div>

			</div>
			</div> : <img src={spinner} className="App-logo" alt="logo" /> }
	</div>
}

const mapStateToProps = state =>{

	return {
		pokemons: state.pokemons
	}
}

export default connect(mapStateToProps, {})(Pokemon)