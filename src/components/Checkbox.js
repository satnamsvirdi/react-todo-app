import React from "react";
import "../index.css";

function Checkbox({todo, index, handleChange}) {
	const isChecked = todo.isChecked;
	return (
		<input
			className="list-checkbox" 
			type="checkbox"
			checked={isChecked ? "checked" : ""}
			onChange={() => handleChange(index)} 
		/>
	);
};

export default Checkbox;