import React, { useContext } from "react";
import FlagsContext from "../../contexts/FlagsContext";

const BoxFooter = ({ handleCurrentFlagIndex, handleRestart }) => {
	const flag = useContext(FlagsContext);
	return (
		<div id="details-area" className="d-flex justify-content-between align-items-center p-3">
			<span className="lead" id="answer">
				Take time, Think well
			</span>
			<div className="d-flex gap-2">
				<button className="btn btn-info" onClick={handleRestart}>
					Restart
				</button>
				<button
					className="btn btn-secondary text-nowrap"
					id="nextBtn"
					onClick={handleCurrentFlagIndex}
					disabled={flag.currentFlagIndex > 8}
				>
					Next <b> {">"} </b>
				</button>
			</div>
		</div>
	);
};

export default BoxFooter;

//  onclick="handleRestart();" on restart
// onclick="handleNext(event);" on next
