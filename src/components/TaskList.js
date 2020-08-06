import React from 'react';
import "../index.css";

import Task from './Task';
import Empty from './Empty';

function TaskList({data, handleChange, handleClick}) {

  const listItems = data.map((todo, index) => {
        return (
          <Task todo={todo} 
            key={index}
            index={index}
            handleChange={handleChange} 
            handleClick={handleClick}
        />
      )
      })

  const list = !data[0] ? <Empty /> : listItems;

  return (
    <ul className="todo-list">
      {list}
    </ul>    
  );
};

export default TaskList;