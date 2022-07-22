import React from "react";
import SingleOption from "./SingleOption";

const index = (props) => {
	return (
		<div className="d-flex gap-2 p-3">
			<select id="name-input" className="form-select" aria-label=".form-select-sm example">
				<option defaultValue>--Select country--</option>

				{true && <SingleOption />}
				{/* multiple options belong here */}
			</select>
			<button className="btn btn-primary text-nowrap" id="checkBtn">
				Check
			</button>
		</div>
	);
};

export default index;

//  onclick="handleCheck(event);" on check