import React from 'react';

function TaskInput({addTodo}) {
	let input;
  	return (
	    <form onSubmit={(e) => {
	    	e.preventDefault();
	    	console.log(input.value);
	    	addTodo(input.value);
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