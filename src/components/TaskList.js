import React from 'react';

import Task from './Task';

function TaskList({data}) {
  return (
    <div>
      {data.map((task, key) => {
      	return <Task data={task} key={key} />
      })}
    </div>    
  );
};

export default TaskList;