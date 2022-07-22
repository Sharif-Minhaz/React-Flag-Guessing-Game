import React, { useContext } from "react";
import FlagsContext from "../../contexts/FlagsContext";

const BoxHeader = (props) => {
	const flag = useContext(FlagsContext);
	return (
		<div className="card-header d-flex align-items-center justify-content-between">
			<span className="fs-4 text-uppercase">
				Guess The Flag: <span id="turn-number">{flag.currentFlagIndex + 1}</span>/{10}
			</span>
			<span className="input-group-text" id="basic-addon2">
				Point(s):{" "}
				<span className="ms-1" id="points">
					{0}
				</span>
			</span>
		</div>
	);
};

export default BoxHeader;
