import React from 'react'

function TodoView({title, isDone, children}) {
  return (
    <div className={`card ${
      isDone 
        ? 'bg-success' 
        : 'bg-danger'
      } text-white` }>
      <div className="card-block">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-text">
          {
            isDone 
              ? "This todo has been completed" 
              : "This todo has yet to be finished"}
        </div>
        {
          children
        }
      </div>
    </div>
  )
}

export default TodoView
