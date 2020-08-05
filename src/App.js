import React from 'react';

import AppTitle from './components/AppTitle';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }; 

  setLocalStorage = () => {
    console.log("locals here");
    //console.log(this.state.data);
    //localStorage.setItem("todos", JSON.stringify(this.state.data));
  }

  addTodo = (obj) => {
    const newTodo = [...this.state.data, obj]

    this.setState({
      data: newTodo
    });

    localStorage.setItem("todos", JSON.stringify(newTodo));
  }


  isComplete = (index) => { 
    let newTodos = [...this.state.data];
    newTodos[index].isChecked = !newTodos[index].isChecked ? true : false;
    this.setState({
      data: newTodos
    });

  };

  removeTodo = (index) => {
    let newTodo = [...this.state.data];
    newTodo.splice(index,1);
    this.setState({
      data: newTodo
    });

    localStorage.setItem("todos", JSON.stringify(newTodo));
  
  };

  hydrateTodoList = () => {
    if(localStorage.hasOwnProperty('todos')) {
      const localData = JSON.parse(localStorage.getItem("todos"))
      this.setState({
        data: localData
      })
    } else {
      return {}
    }
    
  }

  componentDidMount() {
    this.hydrateTodoList();
  }

  render() {
    return (
      <>
        <AppTitle />
        <TaskInput addTodo={this.addTodo} />
        <TaskList 
          data={this.state.data}
          handleChange={this.isComplete}
          handleClick={this.removeTodo}
        />
      </>
    );
  };
}; 

export default App;
