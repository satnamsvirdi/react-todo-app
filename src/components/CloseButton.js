import React from 'react';

function CloseButton({ index, handleClick }) {
	return (
		<button type="button" onClick={() => handleClick(index)} >x</button>
	);
};

export default CloseButton;