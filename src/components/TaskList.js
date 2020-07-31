import React from 'react';
import "../index.css";

import Task from './Task';

function TaskList({data, handleChange, handleClick}) {
  return (
    <ul className="todo-list">
      {data.map((todo, index) => {
      	return (
      		<Task todo={todo} 
      			key={index}
      			index={index}
	      		handleChange={handleChange} 
	      		handleClick={handleClick}
	    	/>
	    )
      })}
    </ul>    
  );
};

export default TaskList;