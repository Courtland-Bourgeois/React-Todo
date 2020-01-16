// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
// import SearchForm from '../SearchForm'

const TodoList = (props) => {
  return (
    <div>
      {/* <SearchForm /> */}
      {props.todoList.map(item => (
        <Todo key={item.id} item={item} toggleCompletedTask={props.toggleCompletedTask} />
      ))}
    </div>
  )
}

export default TodoList
