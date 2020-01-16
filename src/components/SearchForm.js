// import React, { useState, useEffect } from 'react';

// const SearchForm = (props) => {
//   console.log(props)
//   const [data, setData] = useState([]);
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     const searchTodo = props.todoList.filter(todo => 
//       todo.task.toLowerCase().includes(query.toLowerCase())
//     )
//     setData(searchTodo)
//   }, [query])

//   const handleChange = e => {
//     setQuery(e.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <input name='search' onChange={handleChange} value={query} />
//       </form>
//       {data.map(task => <h2 key={task}> {data.task} </h2>)}
//     </div>
//   )
// }

// export default SearchForm;