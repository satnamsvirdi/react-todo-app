import React from 'react';
import "../index.css";

import Checkbox from './Checkbox';
import CloseButton from './CloseButton';

const strike = {
	textDecoration: "line-through"
}

function Task({todo, index, handleChange, handleClick}) {
	return (
	    <>
	    	<li className="todo-list-item">
	    		<Checkbox 
	    			todo={todo} 
	    			handleChange={handleChange} 
	    			index={index}  
	    		/>
	    		<div className="list-item-text" style={todo.isChecked? strike : {}}>{todo.name}</div>
	    		<CloseButton index={index} handleClick={handleClick} />
	    	</li>
	    </>
	);
};

export default Task;