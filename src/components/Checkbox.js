import React from "react";

function Checkbox({todo, index, handleChange}) {
	const isChecked = todo.isChecked;
	return (
		<input 
			type="checkbox"
			checked={isChecked ? "checked" : ""}
			onChange={() => handleChange(index)} 
		/>
	);
};

export default Checkbox;