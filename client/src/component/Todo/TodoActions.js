import React from 'react'

const TodoActions = ({onDelete, toggleEdit}) => {
    return (
      <div className="d-flex justify-content-between align-items-end mt-5">
        <button className="btn btn-link text-white" onClick={onDelete}>Delete</button>
        <button className="btn btn-link text-white" onClick={toggleEdit}>Edit</button>
      </div>
    )
}

export default TodoActions;
  