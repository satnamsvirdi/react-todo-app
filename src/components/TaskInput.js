import React from 'react';

function TaskInput({addTodo}) {
	let input;
  	return (
	    <form onSubmit={(e) => {
	    	e.preventDefault();
	    	const inputObj = {
	    		name: input.value,
	    		isChecked: false
	    	}
	    	addTodo(inputObj);
	    	input.value = '';
	    }}>
	      <input 
	        type="text" 
	        placeholder="Add Task here..."
	        ref={node => input = node}
	      />
	    </form>
  	);
};

export default TaskInput;