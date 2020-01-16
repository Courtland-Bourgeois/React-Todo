import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "bootswatch/dist/darkly/bootstrap.min.css";
import styled from 'styled-components';

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

const Header = styled.div`
  display: flex;
  justify-content: center;
`

const Input = styled.div`
  text-align: center;
`

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

  toggleCompletedTask = id => {
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
        <Header>
          <h1>Welcome to your Tech-Todo App!</h1>
        </Header>
        <Input>
          <TodoList todoList={this.state.todoList} toggleCompletedTask={this.toggleCompletedTask} />
          <TodoForm handleChange={this.handleChange} value={this.state.newTask} addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        </Input>
      </div>
    );
  }
}

export default App;
