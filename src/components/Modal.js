import React,{useState} from 'react';

const Modal = ({ handleClose, show, moveDetail }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  console.log(moveDetail, " ∆∆");

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="close-btn"><strong>X</strong> close</button>

    		<div className="overflow">
		      	<section className="modal-main">
		    		<h5><strong>Move Name </strong>: {moveDetail ? moveDetail.name : null}</h5>
		    		<h6><strong>Accuracy </strong>: {moveDetail ? moveDetail.accuracy : <span>&#45;</span>}</h6>
		    		<h6><strong>Power </strong>: {moveDetail ? moveDetail.power : <span>&#45;</span>}</h6>
		    		<h6><strong>Damage Class </strong>: {moveDetail ? moveDetail.damage_class.name : <span>&#45;</span>}</h6>
		    		
		    		<hr />

		    		<h6><strong>Meta, ailment </strong> {moveDetail ? moveDetail.meta.ailment.name : null}</h6>
					<h6><strong>Meta, ailment_chance </strong> {moveDetail ? moveDetail.meta.ailment_chance : null}</h6>
					<h6><strong>Meta, category </strong> {moveDetail ? moveDetail.meta.category.name : null}</h6>
					<h6><strong>Meta, crit_rate </strong> {moveDetail ? moveDetail.meta.crit_rate : null}</h6>
					<h6><strong>Meta, drain </strong> {moveDetail ? moveDetail.meta.drain : null}</h6>
					<h6><strong>Meta, flinch_chance </strong> {moveDetail ? moveDetail.meta.flinch_chance : null}</h6>
					<h6><strong>Meta, healing </strong> {moveDetail ? moveDetail.meta.healing : null}</h6>
					<h6><strong>Meta, max_hits </strong> {moveDetail ? moveDetail.meta.max_hits : null}</h6>
					<h6><strong>Meta, max_turns </strong> {moveDetail ? moveDetail.meta.max_turns : null}</h6>
					<h6><strong>Meta, min_hits </strong> {moveDetail ? moveDetail.meta.min_hits : null}</h6>
					<h6><strong>Meta, min_turns </strong> {moveDetail ? moveDetail.meta.min_turns : null}</h6>
					<h6><strong>Meta, stat_chance </strong> {moveDetail ? moveDetail.meta.stat_chance : null}</h6>

		    		<h6><strong>Damage Class </strong>: {moveDetail ? moveDetail.damage_class.name : <span>&#45;</span>}</h6>

		      	</section>
		        
		    </div>
    	</div>
	       
    </div>
  );
};

export default Modal;