import React, { useContext } from "react";
import FlagsContext from "../../contexts/FlagsContext";

const BoxFooter = ({ handleCurrentFlagIndex, handleRestart, resultText, resState }) => {
	const flag = useContext(FlagsContext);
	return (
		<div id="details-area" className="d-flex justify-content-between align-items-center p-3">
			{resState === true ? (
				<span className="text-success lead" id="answer">
					{resultText}
				</span>
			) : resState === null ? (
				<span className="text-dark lead" id="answer">
					{resultText}
				</span>
			) : (
				<span className="text-danger lead" id="answer">
					{resultText}. It is {flag.correctAns}
				</span>
			)}
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
