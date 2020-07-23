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

  addTodo(value) {
    console.warn(value);
    this.setState({
      data: [...this.state.data, value]
    });
  }

  render() {
    return (
      <>
        <AppTitle />
        <TaskInput addTodo={this.addTodo.bind(this)} />
        <TaskList data={this.state.data}/>
      </>
    );
  };
}; 

export default App;
