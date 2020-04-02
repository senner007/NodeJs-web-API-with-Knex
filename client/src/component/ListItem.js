import React from 'react'

const ListItem = ({title, isDone}) => {
  return (
    <li className="list-group-item">
      {title} - {isDone ? "Done" : "Not done" }
    </li>
  )
}

export default ListItem
