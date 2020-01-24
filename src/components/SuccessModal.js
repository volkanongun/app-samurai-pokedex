import React from 'react';

import {Link} from "react-router-dom";

import capitalize from '../utils';

const SuccessModal = ({ handleClose, show, successDetail }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>

    	<div className="modal-holder">

    		<button onClick={handleClose} className="button close-btn-mod"><strong>X</strong> close</button>

    		<div className="overflow-mod success">
    			<section className="modal-main">
					<p>Successfully added {successDetail ? capitalize(successDetail.name) : null} to <Link to="/mypokemons">My List</Link></p>
				</section>
		    </div>
    	</div>
	       
    </div>
  );
};

export default SuccessModal;