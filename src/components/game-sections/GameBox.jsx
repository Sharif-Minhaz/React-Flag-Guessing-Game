import React, { useState, useEffect } from "react";
// components
import Loader from "../loader";
import BoxHeader from "./BoxHeader";
import Flag from "./Flag";
import OptionBox from "./options";
import BoxFooter from "./BoxFooter";
// utils
import Flags from "../../utils/flags";
// contexts
import FlagsContext from "../../contexts/FlagsContext";

// create instance of Flags
const flags = new Flags();

function GameBox() {
	// hooks
	const [isLoading, setIsLoading] = useState(true);
	const [randomFlags, setRandomFlags] = useState([]);
	const [currentFlagIndex, setCurrentFlagIndex] = useState(0);

	useEffect(() => {
		flags
			.getFlags()
			.then(() => {
				setRandomFlags(flags.getRandomFlags());
				setIsLoading(false);
			})
			.catch((error) => {
				errorHandler(error);
			});
	}, []);

	// necessary functions

	const errorHandler = (error) => {
		setIsLoading(false);
		console.error(error);
		throw new Error("Something went wrong!");
	};

	const handleRestart = () => {
		setRandomFlags(flags.getRandomFlags());
		setCurrentFlagIndex(0);
	};

	const handleCurrentFlagIndex = () => {
		setCurrentFlagIndex(currentFlagIndex + 1);
	};

	return (
		<FlagsContext.Provider value={{ randomFlags, currentFlagIndex }}>
			{isLoading ? (
				<Loader />
			) : (
				<div className="card col-lg-6 col-md-8 col-sm-10 col-12 m-auto mt-3">
					<BoxHeader />
					<Flag />
					<OptionBox />
					<hr className="mb-0" />
					<BoxFooter
						handleCurrentFlagIndex={handleCurrentFlagIndex}
						handleRestart={handleRestart}
					/>
				</div>
			)}
		</FlagsContext.Provider>
	);
}

export default GameBox;
