import React from 'react'
import { Link } from 'react-router-dom'

const TodoLink = ({title, isDone, id}) => {
  return (
    <Link to={`/api/todo/${id}`} className={`list-group-item ${isDone ? 'bg-success' : 'bg-danger' } text-white mb-3 d-flex justify-content-center align-items-center`}>
      <h3>{title}</h3>
    </Link>
  )
}
 
export default TodoLink
