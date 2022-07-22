import React from "react";
import Loader from "../loader";
import BoxFooter from "./BoxFooter";
import BoxHeader from "./BoxHeader";
import Flag from "./Flag";
import OptionBox from "./options";

function GameBox() {
	return (
		<div className="card col-lg-6 col-md-8 col-sm-10 col-12 m-auto mt-3">
			<BoxHeader />
			<Flag />
			<OptionBox />
			<hr className="mb-0" />
			<BoxFooter />
		</div>
	);
}

export default GameBox;
