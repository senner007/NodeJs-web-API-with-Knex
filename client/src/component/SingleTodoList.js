import React from 'react'

const SingleTodoList = ({ title, isDone, toggleEdit }) => {
  return (
    <div className={`card ${isDone ? 'bg-success' : 'bg-danger'} text-white` }>
      <div className="card-block">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-text">
          {isDone ? "This todo has been completed" : "This todo has yet to be finished"}
        </div>
        <div className="d-flex justify-content-between align-items-end mt-5">
          <button className="btn btn-link text-white">Delete</button>
          <button className="btn btn-link text-white" onClick={toggleEdit}>Edit</button>
        </div>
      </div>
      
    </div>
  )
}

export default SingleTodoList
