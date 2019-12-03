import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
  {
    task: 'Learn setState()',
    id: 1,
    completed: false
  },
  {
    task: 'Style my Todo List',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoList: todoList,
      newTask: ''
    }
  }

  handleChange = e => {
    this.setState({
      newTask: e.target.value
    })
  }

  addTodo = e => {
    e.preventDefault()
    const newTodo = {
      task: this.state.newTask,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      newTask: ''
    })
  }

  toggleCompletedTask = (id) => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault()
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} toggleCompletedTask={this.toggleCompletedTask} />
        <TodoForm handleChange={this.handleChange} value={this.state.newTask} addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
