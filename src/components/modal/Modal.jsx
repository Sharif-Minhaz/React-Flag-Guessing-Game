import React, { useContext } from "react";
import ModalBody from "./ModalBody";
import ModalBtn from "./ModalBtn";
import FlagsContext from "../../contexts/FlagsContext";

const Modal = ({ handleRestart }) => {
	const flag = useContext(FlagsContext);
	return (
		<>
			<ModalBtn />
			<ModalBody points={flag.points} handleRestart={handleRestart} />
		</>
	);
};

export default Modal;
