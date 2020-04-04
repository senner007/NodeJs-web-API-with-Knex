import React, { useState } from 'react'
import TodoForm from './TodoForm'
import axios from 'axios';

const CreateTodo = (props) => {

    const createTodo = (title, isDone, ) => {
      const { history } = props;
  
      axios.post('/api/todo', {title: title, is_done: isDone === 'true' }).then(() => {
          console.log(history)
          history.push('/')
      })
      
    }
  return (
    <TodoForm submitTodo={createTodo}/>
  )
}

export default CreateTodo
