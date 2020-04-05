import React from 'react'
import { Link } from 'react-router-dom'

const TodoLink = ({title, isDone, id}) => {
  return (
    <Link to={`/api/todo/${id}`} className={`list-group-item ${isDone ? 'bg-success' : 'bg-danger' } text-white mb-2 pb-1 d-flex justify-content-center align-items-center`}>
      <h4 className={"align-middle"}>{title}</h4>
    </Link>
  )
}
 
export default TodoLink
