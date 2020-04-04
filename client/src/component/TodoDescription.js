import React, { useState } from 'react'


function TodoDescription({title, isDone}) {
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
        </div>
      </div>
    </div>
  )
}

export default TodoDescription
