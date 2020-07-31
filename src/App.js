import React from 'react';

import AppTitle from './components/AppTitle';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: "read 10 pages of Effective UI",
        isChecked: false
      },
      {
        name: "do a barrel role",
        isChecked: false
      },
      {
        name: "drink lassi",
        isChecked: true
      }
      ]
    }
  }; 

  addTodo = (obj) => {
    this.setState({
      data: [...this.state.data, obj]
    });
  }

  handleChange = (index) => { 
    let newTodos = [...this.state.data];
    newTodos[index].isChecked = !newTodos[index].isChecked ? true : false;
    this.setState({
      data: newTodos
    })
  };

  handleClick = (index) => {
    let newTodos = [...this.state.data];
    newTodos.splice(index,1);
    this.setState({
      data: newTodos
    })
  };

  render() {
    return (
      <>
        <AppTitle />
        <TaskInput addTodo={this.addTodo} />
        <TaskList 
          data={this.state.data}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </>
    );
  };
}; 

export default App;
