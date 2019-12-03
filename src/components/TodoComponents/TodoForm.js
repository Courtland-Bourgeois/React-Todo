import React from 'react';

const TodoForm = (props) => {

  return (
    <div>
      <form>
        <input 
          type="text"
          name="item"
          value={props.value}
          onChange={props.handleChange}
          placeholder="...todo"
        />
        <button onClick={props.addTodo}>Add Todo</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm 