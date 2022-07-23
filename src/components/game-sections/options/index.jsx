import React from "react";
import SingleOption from "./SingleOption";
import shortid from "shortid";

const index = ({ options, handleSubmit, handleSelect, selected, disableInput }) => {
	return (
		<form className="d-flex gap-2 p-3" onSubmit={handleSubmit}>
			<select
				value={selected}
				onChange={handleSelect}
				id="name-input"
				className="form-select"
				aria-label=".form-select-sm example"
				disabled={disableInput}
			>
				<option value="--Select country--">--Select country--</option>

				{options.map((option) => (
					<SingleOption key={shortid.generate()} option={option} />
				))}
			</select>
			<button
				disabled={disableInput}
				type="submit"
				className="btn btn-primary text-nowrap"
				id="checkBtn"
			>
				Check
			</button>
		</form>
	);
};

export default index;

//  onclick="handleCheck(event);" on check
