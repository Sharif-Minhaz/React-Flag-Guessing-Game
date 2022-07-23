import React, { useState, useEffect } from "react";
// components
import Loader from "../loader";
import BoxHeader from "./BoxHeader";
import Flag from "./Flag";
import OptionBox from "./options";
import BoxFooter from "./BoxFooter";
import Modal from "../modal";
// utils
import Flags from "../../utils/flags";
import resultTexts from "../../utils/result";
// contexts
import FlagsContext from "../../contexts/FlagsContext";

// create instance of Flags
const flags = new Flags();

const GameBox = () => {
	// hooks
	const [isLoading, setIsLoading] = useState(true);
	const [randomFlags, setRandomFlags] = useState([]);
	const [options, setOptions] = useState([]);
	const [selected, setSelected] = useState("--Select country--");
	const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
	const [correctAns, setCorrectAns] = useState("");
	const [points, setPoints] = useState(0);
	const [resultText, setResultText] = useState({ msg: "Take time, Think well", isCorrect: null });
	const [disableInput, setDisableInput] = useState(false);

	useEffect(() => {
		flags
			.getFlags()
			.then((data) => {
				setRandomFlags(flags.getRandomFlags());
				const [options, correctOption] = flags.getRandomOptions(0);
				setOptions(options);
				setCorrectAns(correctOption);
				setIsLoading(false);
			})
			.catch((error) => {
				errorHandler(error);
			});
	}, []);

	useEffect(() => {
		const [options, correctOption] = flags.getRandomOptions(currentFlagIndex);
		setOptions(options);
		setCorrectAns(correctOption);
	}, [currentFlagIndex]);

	// necessary functions

	const errorHandler = (error) => {
		setIsLoading(false);
		console.error(error);
		throw new Error("Something went wrong!");
	};

	const handleRestart = () => {
		defaultState();
		setRandomFlags(flags.getRandomFlags());
		setCurrentFlagIndex(0);
		const [options, correctOption] = flags.getRandomOptions(0);
		setOptions(options);
		setCorrectAns(correctOption);
		setPoints(0);
	};

	const handleCurrentFlagIndex = () => {
		setCurrentFlagIndex(currentFlagIndex + 1);
		defaultState();
	};

	const defaultState = () => {
		setSelected("--Select country--");
		setDisableInput(false);
		setResultText({
			msg: "Take time, Think well",
			isCorrect: null,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (selected === "--Select country--") {
			return alert("First select a country!");
		} else if (correctAns === selected) {
			setPoints(points + 1);
			setResultText({ msg: genSuccessAnsText(), isCorrect: true });
		} else {
			setResultText({ msg: genFailAnsText(), isCorrect: false });
		}
		setDisableInput(true);
	};

	const genSuccessAnsText = () => {
		return resultTexts.success[Math.floor(Math.random() * resultTexts.success.length)];
	};

	const genFailAnsText = () => {
		return resultTexts.fail[Math.floor(Math.random() * resultTexts.success.length)];
	};

	const handleSelect = (event) => {
		setSelected(event.target.value);
	};

	return (
		<FlagsContext.Provider value={{ randomFlags, currentFlagIndex, correctAns }}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className="card col-lg-6 col-md-8 col-sm-10 col-12 m-auto mt-3">
						<BoxHeader points={points} />
						<Flag />
						<OptionBox
							selected={selected}
							options={options}
							handleSubmit={handleSubmit}
							handleSelect={handleSelect}
							disableInput={disableInput}
						/>
						<hr className="mb-0" />
						<BoxFooter
							handleCurrentFlagIndex={handleCurrentFlagIndex}
							handleRestart={handleRestart}
							resultText={resultText.msg}
							resState={resultText.isCorrect}
						/>
					</div>
					{currentFlagIndex === 9 && <Modal />}
				</>
			)}
		</FlagsContext.Provider>
	);
};

export default GameBox;
