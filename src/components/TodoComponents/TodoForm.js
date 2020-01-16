import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
  display: flex
  justify-content: center
`

const Input = styled.form`
  display: flex
  flex-direction: column
`

const TodoForm = (props) => {

  return (
    <Form>
      <Input>
        <input class="form-control mr-sm-2"
          type="text"
          name="item"
          value={props.value}
          onChange={props.handleChange}
          placeholder="...todo"
        />
        <button onClick={props.addTodo} style={{ marginTop: '4%' }} type="button" class="btn btn-success">Add Todo</button>
        <button onClick={props.clearCompleted} style={{ marginTop: '4%' }} type="button" class="btn btn-danger">Clear Completed</button>
      </Input>
    </Form>
  )
}

export default TodoForm 