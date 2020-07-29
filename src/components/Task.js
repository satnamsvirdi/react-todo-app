import React from 'react';

import Checkbox from './Checkbox';
import CloseButton from './CloseButton';

const strike = {
	textDecoration: "line-through"
}

function Task({todo, index, handleChange, handleClick}) {
	return (
	    <>
	    	<div>
	    		<Checkbox 
	    			todo={todo} 
	    			handleChange={handleChange} 
	    			index={index}  
	    		/>
	    		<span style={todo.isChecked? strike : {}}>{todo.name}</span>
	    		<CloseButton index={index} handleClick={handleClick} />
	    	</div>
	    </>
	);
};

export default Task;