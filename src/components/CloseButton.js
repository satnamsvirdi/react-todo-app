import React from 'react';
import "../index.css";

function CloseButton({ index, handleClick }) {
	return (
		<button className="btn-close" type="button" onClick={() => handleClick(index)} >x</button>
	);
};

export default CloseButton;