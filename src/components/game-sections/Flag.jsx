import React, { useContext } from "react";
import FlagsContext from "../../contexts/FlagsContext";


const Flag = (props) => {
	const flag = useContext(FlagsContext);
	
	return (
		<div className="card-body text-center pt-4">
			<img
				id="flag"
				className="edge-size mt-2"
				src={flag.randomFlags[flag.currentFlagIndex].flags[1]}
				alt="country_flag"
			/>
		</div>
	);
};

export default Flag;
