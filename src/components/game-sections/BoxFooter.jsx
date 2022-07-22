import React from "react";

const BoxFooter = () => {
	return (
		<div id="details-area" className="d-flex justify-content-between align-items-center p-3">
			<span className="lead" id="answer">
				Take time, Think well
			</span>
			<div className="d-flex gap-2">
				<button className="btn btn-info">Restart</button>
				<button className="btn btn-secondary text-nowrap" id="nextBtn">
					Next <b> {">"} </b>
				</button>
			</div>
		</div>
	);
};

export default BoxFooter;

//  onclick="handleRestart();" on restart
// onclick="handleNext(event);" on next
