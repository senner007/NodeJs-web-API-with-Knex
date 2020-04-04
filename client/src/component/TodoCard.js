import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const TodoCard = (props) => {
  
  const onDeleteTodo = () => {
    axios.delete(`${props.id}`).then((result) => {
       props.history.push('/');
    })
  }

  return (
    <>
    {
      props.isLoading
        ? <h3>Loading...</h3>
        : props.children      
    }
      <button onClick={onDeleteTodo}>Delete</button>
      <button onClick={props.toggleEdit}>Edit</button>
    </>
  )

}

export default withRouter(TodoCard)
