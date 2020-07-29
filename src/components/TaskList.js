import React from 'react';

import Task from './Task';

function TaskList({data, handleChange, handleClick}) {
  return (
    <div>
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
    </div>    
  );
};

export default TaskList;