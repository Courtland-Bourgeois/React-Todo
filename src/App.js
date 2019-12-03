import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
  {
    task: 'Learn setState()',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Style my Todo List',
    id: Date.now(),
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
      todoList: todoList
    }
  }

  addTodo = (newTodoItem) => {
    const newTodo = {
      task: newTodoItem,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }

  handleDelete = (itemId) => {
    const completed = this.state.todoList.filter(item => item.id !== itemId)
    this.setState({
      todoList: todoList
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} />
        <TodoForm addTodo={this.addTodo} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
