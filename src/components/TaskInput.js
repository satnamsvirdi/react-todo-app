import React from 'react';
import "../index.css";

function TaskInput({addTodo}) {
	let input;
  	return (
	    <form
	    	className="todo-form"
	    	onSubmit={(e) => {
		    	e.preventDefault();
		    	const inputObj = {
		    		name: input.value,
		    		isChecked: false
		    	}
		    	addTodo(inputObj);
		    	input.value = '';
	    }}>
	      <input 
	      	className="todo-form-input"
	        type="text" 
	        placeholder="Add Task here..."
	        ref={node => input = node}
	      />
	    </form>
  	);
};

export default TaskInput;