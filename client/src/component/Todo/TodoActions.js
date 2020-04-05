import React from 'react'

const TodoActions = ({onDelete, toggleEdit, deleteResponse}) => {

    const onDeleteAction = async () => {
        await onDelete();
        deleteResponse();
    }

    return (
      <div className="d-flex justify-content-between align-items-end mt-5">
        <button className="btn btn-link pl-3 text-white" onClick={onDeleteAction}>Delete</button>
        <button className="btn btn-link pr-3 text-white" onClick={toggleEdit}>Edit</button>
      </div>
    )
}

export default TodoActions;
  