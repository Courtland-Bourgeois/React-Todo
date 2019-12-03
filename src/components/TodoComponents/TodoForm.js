import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: ''
    }
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.item)
    this.setState({
      item: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
            placeholder="...todo"
          />
          <button>Add Todo</button>
          <button onClick={this.props.onDelete}>Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm 