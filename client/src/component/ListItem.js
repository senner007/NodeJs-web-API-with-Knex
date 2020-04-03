import React from 'react'

const ListItem = ({title, isDone}) => {
  return (
    <li className={`list-group-item ${isDone ? 'bg-success' : 'bg-danger' } text-white mb-3 d-flex justify-content-center align-items-center`}>
      <h3>{title}</h3>
    </li>
  )
}
 
export default ListItem
