import React from 'react';
import spinner from '../img/spinner.gif';

import {connect} from 'react-redux';

import capitalize from '../utils';

function Pokemon({match, pokemons}){
	
	const poke = pokemons.pokemons.filter(poke => poke.id === parseInt(match.params.id))[0];

	const stats = poke ? poke.stats.map((stat,key) => {
		return <h4 key={key}><strong>{stat.stat.name}</strong> : {stat.base_stat}</h4>
	}) : null

	console.log(poke);

	return <div>
		{ poke ? <div className="container">

			  <div className="row">
			    <div className="twelve columns">
			    	<div className="pokemon-stats">
				
						<div className="image">
							<h4>Pokemon Name : {capitalize(poke.name)}</h4>
							<div className="actions"> 
								<p><button className="button">Add to my pokemon list</button></p>
							</div>
							<img className="pokemon-image" alt={poke.name} src={poke.sprites.front_default}/>
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