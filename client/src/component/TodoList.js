import React from 'react'

const TodoList = ({ children }) => {
  return (
    <ul className = "list-group">
       { children }
    </ul>
  )
}

export default TodoList
