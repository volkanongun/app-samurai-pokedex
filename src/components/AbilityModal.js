import React from 'react';

const AbilityModal = ({ handleClose, show, abilityDetail }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="button close-btn-mod"><strong>X</strong> close</button>

    		<div className="overflow-mod">
    			<section className="modal-main">
				 	{abilityDetail ? abilityDetail.effect_entries.map((e,key) => <span key={key}>{e.effect}</span>) : null}
				 </section>
		    </div>
    	</div>
	       
    </div>
  );
};

export default AbilityModal;