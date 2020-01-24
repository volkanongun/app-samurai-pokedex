import React,{useState} from 'react';

const Modal = ({ handleClose, show, moveDetail }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  console.log(moveDetail, ' < moveDetail');
  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="close-btn button"><strong>X</strong> close</button>

    		<div className="overflow">
				{moveDetail ? <section className="modal-main">
		    		<h5><strong>Move Name </strong>: {moveDetail.name}</h5>
		    		<h6><strong>Accuracy </strong>: {moveDetail.accuracy}</h6>
		    		<h6><strong>Power </strong>: {moveDetail.power}</h6>
		    		<h6><strong>Damage Class </strong>: {moveDetail.damage_class.name}</h6>
		    		
		    		<hr />

		    		{moveDetail ? moveDetail.effect_entries.map((e,key) => <span key={key}>{e.short_effect}</span>) : null}

		    		<hr />

		    		<h6><strong>Meta, ailment </strong> {moveDetail.meta.ailment.name}</h6>
					<h6><strong>Meta, ailment_chance </strong> {moveDetail.meta.ailment_chance}</h6>
					<h6><strong>Meta, category </strong> {moveDetail.meta.category.name}</h6>
					<h6><strong>Meta, crit_rate </strong> {moveDetail.meta.crit_rate}</h6>
					<h6><strong>Meta, drain </strong> {moveDetail.meta.drain}</h6>
					<h6><strong>Meta, flinch_chance </strong> {moveDetail.meta.flinch_chance}</h6>
					<h6><strong>Meta, healing </strong> {moveDetail.meta.healing}</h6>
					<h6><strong>Meta, max_hits </strong> {moveDetail.meta.max_hits}</h6>
					<h6><strong>Meta, max_turns </strong> {moveDetail.meta.max_turns}</h6>
					<h6><strong>Meta, min_hits </strong> {moveDetail.meta.min_hits}</h6>
					<h6><strong>Meta, min_turns </strong> {moveDetail.meta.min_turns}</h6>
					<h6><strong>Meta, stat_chance </strong> {moveDetail.meta.stat_chance}</h6>

		    		<h6><strong>Damage Class </strong>: {moveDetail.damage_class.name}</h6>

		      	</section> : null}		        
		    </div>
    	</div>
	       
    </div>
  );
};

export default Modal;